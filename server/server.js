// server.js
import express from 'express'
import path from 'path'

const app = express()
const PORT = process.env.PORT || 5173

// Serve static files from the 'dist' directory
app.use(express.static(path.resolve('dist')))

// Redirect all routes to index.html
app.get('/', (req, res) => {
  res.sendFile(path.resolve('dist', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
