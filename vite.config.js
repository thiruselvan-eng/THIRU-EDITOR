import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'serve-videos-with-range',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          try {
            const rawUrl = req.url.split('?')[0]
            const decodedUrl = decodeURIComponent(rawUrl)
            
            if (decodedUrl.startsWith('/VIDEOS/') || decodedUrl.startsWith('/videos/')) {
              const subPath = decodedUrl.replace(/^\/(VIDEOS|videos)\//i, '')
              const filePath = path.resolve(__dirname, 'public', 'VIDEOS', subPath)
              
              if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
                const stat = fs.statSync(filePath)
                const fileSize = stat.size
                const range = req.headers.range

                res.setHeader('Content-Type', 'video/mp4')
                res.setHeader('Accept-Ranges', 'bytes')
                res.setHeader('Cache-Control', 'public, max-age=3600')

                if (range) {
                  const parts = range.replace(/bytes=/, '').split('-')
                  const start = parseInt(parts[0], 10)
                  const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1
                  const chunksize = end - start + 1
                  const file = fs.createReadStream(filePath, { start, end })
                  
                  res.writeHead(206, {
                    'Content-Range': `bytes ${start}-${end}/${fileSize}`,
                    'Content-Length': chunksize,
                    'Content-Type': 'video/mp4',
                  })
                  file.pipe(res)
                  return
                } else {
                  res.writeHead(200, {
                    'Content-Length': fileSize,
                    'Content-Type': 'video/mp4',
                  })
                  fs.createReadStream(filePath).pipe(res)
                  return
                }
              }
            }
          } catch (e) {
            console.error('Error in video middleware:', e)
          }
          next()
        })
      }
    }
  ],
  server: {
    port: 5173,
    host: true,
  }
})
