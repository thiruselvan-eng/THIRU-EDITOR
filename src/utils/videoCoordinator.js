/**
 * VideoPlaybackCoordinator
 * Centralized IntersectionObserver controller ensuring:
 * 1. Automatic scroll-to-play when a video enters viewport (50–70% visibility)
 * 2. Automatic pause when video leaves viewport (< 30% visibility)
 * 3. Exclusive playback: Only the most prominently visible video plays at any given time
 * 4. Muted & playsInline compatibility for zero browser policy rejection
 */

class VideoPlaybackCoordinator {
  constructor() {
    this.registered = new Map(); // id -> { id, element, videoEl, onPlayStateChange, isManual }
    this.ratios = new Map();     // id -> number
    this.activeId = null;
    this.manualOverrideId = null;
    this.observer = null;

    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      this.initObserver();
    }
  }

  initObserver() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute('data-video-id');
          if (!id) return;
          this.ratios.set(id, entry.intersectionRatio);
        });

        this.evaluatePlayback();
      },
      {
        root: null,
        // Detailed thresholds for smooth handoff between adjacent cards
        threshold: [0, 0.15, 0.3, 0.5, 0.65, 0.8, 1.0],
      }
    );
  }

  register(id, element, videoEl, onPlayStateChange) {
    if (!id || !element || !videoEl) return;

    element.setAttribute('data-video-id', id);
    this.registered.set(id, { id, element, videoEl, onPlayStateChange });
    this.ratios.set(id, 0);

    if (this.observer) {
      this.observer.observe(element);
    }
  }

  unregister(id) {
    const item = this.registered.get(id);
    if (item && this.observer) {
      this.observer.unobserve(item.element);
    }

    if (this.activeId === id) {
      this.pause(id);
      this.activeId = null;
    }

    if (this.manualOverrideId === id) {
      this.manualOverrideId = null;
    }

    this.registered.delete(id);
    this.ratios.delete(id);
  }

  evaluatePlayback() {
    // If a user manually triggered playback on a specific card, don't preempt it
    // unless that card drops below 15% visibility
    if (this.manualOverrideId) {
      const manualRatio = this.ratios.get(this.manualOverrideId) || 0;
      if (manualRatio < 0.15) {
        this.manualOverrideId = null;
      } else {
        return;
      }
    }

    let highestId = null;
    let highestRatio = 0;

    // Find the item with highest visibility ratio
    this.ratios.forEach((ratio, id) => {
      if (ratio > highestRatio) {
        highestRatio = ratio;
        highestId = id;
      }
    });

    // We require >= 50% visibility to automatically start playback
    if (highestRatio >= 0.5 && highestId) {
      if (this.activeId !== highestId) {
        this.play(highestId);
      }
    } else {
      // If current active video dropped below 25%, pause it
      if (this.activeId) {
        const currentRatio = this.ratios.get(this.activeId) || 0;
        if (currentRatio < 0.25) {
          this.pause(this.activeId);
          this.activeId = null;
        }
      }
    }
  }

  play(id, isManual = false) {
    const target = this.registered.get(id);
    if (!target || !target.videoEl) return;

    // Pause all other registered videos
    this.registered.forEach((item, itemId) => {
      if (itemId !== id && item.videoEl) {
        try {
          item.videoEl.pause();
        } catch (e) {}
        if (item.onPlayStateChange) item.onPlayStateChange(false);
      }
    });

    // Play target video
    const video = target.videoEl;
    video.muted = video.muted ?? true;
    video.playsInline = true;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          this.activeId = id;
          if (isManual) this.manualOverrideId = id;
          if (target.onPlayStateChange) target.onPlayStateChange(true);
        })
        .catch(() => {
          // Autoplay policy prevented playback, keep UI consistent
          if (target.onPlayStateChange) target.onPlayStateChange(false);
        });
    }
  }

  pause(id) {
    const target = this.registered.get(id);
    if (target && target.videoEl) {
      try {
        target.videoEl.pause();
      } catch (e) {}
      if (target.onPlayStateChange) target.onPlayStateChange(false);
    }
    if (this.activeId === id) this.activeId = null;
    if (this.manualOverrideId === id) this.manualOverrideId = null;
  }

  pauseAll() {
    this.registered.forEach((item) => {
      if (item.videoEl) {
        try {
          item.videoEl.pause();
        } catch (e) {}
        if (item.onPlayStateChange) item.onPlayStateChange(false);
      }
    });
    this.activeId = null;
    this.manualOverrideId = null;
  }

  togglePlay(id) {
    if (this.activeId === id) {
      this.pause(id);
    } else {
      this.play(id, true);
    }
  }
}

export const videoCoordinator = new VideoPlaybackCoordinator();
