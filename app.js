const express = require('express')

require('./config/mongoose')
const app = express()
const PORT = process.env.PORT

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})