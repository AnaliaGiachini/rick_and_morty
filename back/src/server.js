const express = require('express')
const server = express()
const cors = require('cors')
const morgan = require('morgan')
const PORT = 3001
const router = require('./routes/index')
const favsRouter = require('./routes/favsRouter')

// Middleware
server.use(express.json())
server.use(cors())
server.use(morgan('dev'))
server.use('/rickandmorty', router)
server.use('/favs', favsRouter)

server.listen(PORT, () => {
  console.log('Server raised in port ' + PORT)
})
