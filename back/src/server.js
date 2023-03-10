
const http = require('http')
const characters = require('./utils/data')

module.exports =
  // Crea y levanta el Server
  http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    if (req.url.includes('rickandmorty/character')) {
      // Extrae el id
      const id = req.url.split('/').at(-1)
      // Encuentra el personaje
      const characterFiltered = characters.find(char => char.id === Number(id))
      // Envia res
      // stringify parsea el char a Json
      res.writeHead(200, { 'Content-type': 'application/json' }).end(JSON.stringify(characterFiltered))
    }
  }).listen(3001, 'localhost')
