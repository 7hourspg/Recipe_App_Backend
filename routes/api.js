import express from 'express'
import Recipe from '../models/Recipe.js'

const router = express.Router()

router.get('/', (req, res) => {
  Recipe.find()
    .then(recipes => res.json(recipes))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

router.post('/', (req, res) => {
  const { title, price, category, image, quantity } = req.body
  const newRecipe = new Recipe({ title, price, category, image, quantity })
  newRecipe
    .save()
    .then(() => res.json('Recipe Added'))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

router.put('/:id', (req, res) => {
  Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(() => res.json(req.body))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

router.post('/filter-by-category', (req, res) => {
  const { category } = req.body
  console.log(req.body)
  console.log(category)
  Recipe.find({ category })
    .then(recipes => res.json(recipes))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

router.get('/filter-by-price-low-to-high', (req, res) => {
  Recipe.find()
    .sort({ price: 1 })
    .then(recipes => res.json(recipes))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

router.get('/filter-by-price-high-to-low', (req, res) => {
  Recipe.find()
    .sort({ price: -1 })
    .then(recipes => res.json(recipes))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

export default router
