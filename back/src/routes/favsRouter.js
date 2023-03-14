const { Router } = require('express')
// const { favs } = require('../utils/favs')

const favsRouter = Router()
let favs = []

favsRouter.post('/create', (req, res) => {
  favs.push({ ...req.body })
  res.status(201).json(favs)
})

favsRouter.get('/get', (req, res) => {
  return res.json(favs)
})

favsRouter.delete('/delete/:id', (req, res) => {
  const { id } = req.params
  favs = favs.filter(char => char.id !== Number(id))
  return res.status(200).json(favs)
})

module.exports = favsRouter
