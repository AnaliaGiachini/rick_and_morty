
const http = require('http')
const getCharById = require('./controllers/getCharById')
const getCharDetail = require('./controllers/getCharDetail')

// Crea y levanta el Server
http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  if (req.url.includes('onsearch')) {
    const id = req.url.split('/').at(-1)
    getCharById(res, id)
  }
  if (req.url.includes('detail')) {
    const id = req.url.split('/').at(-1)
    getCharDetail(res, id)
  }
}).listen(3001, 'localhost')
