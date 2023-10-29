import express from 'express'
import User from '../models/Users.js'

const router = express.Router()

router.get('/cart/:id', (req, res) => {
  const { id } = req.params
  User.findById(id)
    .then(user => res.json(user.cart))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

router.put('/cart/:id', async (req, res) => {
  const { id } = req.params
  //   console.log(req.body.quantity)

  const user = await User.findById(id)
  const itemIndex = user.cart.findIndex(item => item.productId === req.body._id)

  if (itemIndex !== -1) {
    // If the item exists, increment the quantity
    user.cart[itemIndex].quantity += 1
  } else {
    user.cart.push({
      productId: req.body._id,
      title: req.body.title,
      price: req.body.price,
      category: req.body.category,
      image: req.body.image,
      quantity: 1
    })
  }

  await user.save()

  res.json(user)
})

router.delete('/cart/:id', async (req, res) => {
  const { id } = req.params
  const user = await User.findById(id)
  //   console.log(req.body)
  const itemIndex = user.cart.findIndex(
    item => item.productId === req.body.productId
  )

  if (itemIndex !== -1) {
    user.cart.splice(itemIndex, 1)
  }

  await user.save()

  res.json(user)
})

router.put('/cart/:id/increment', async (req, res) => {
  const { id } = req.params
  const user = await User.findById(id)
  const itemIndex = user.cart.findIndex(
    item => item.productId === req.body.productId
  )

  if (itemIndex !== -1 && user.cart[itemIndex].quantity < 5) {
    user.cart[itemIndex].quantity += 1
     
  }

  await user.save()

  res.json(user)
})

router.put('/cart/:id/decrement', async (req, res) => {
  const { id } = req.params
  const user = await User.findById(id)
  const itemIndex = user.cart.findIndex(
    item => item.productId === req.body.productId
  )

  if (itemIndex !== -1 && user.cart[itemIndex].quantity > 1) {
    user.cart[itemIndex].quantity -= 1
  }

  await user.save()

  res.json(user)
})

export default router
