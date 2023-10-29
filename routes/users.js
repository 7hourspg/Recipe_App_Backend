import express from 'express'
import User from '../models/Users.js'

const router = express.Router()

router.get('/', (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

router.post('/', (req, res) => {
  const { name, email, password, cart } = req.body
  const newUser = new User({ name, email, password, cart })
  newUser
    .save()
    .then(() => res.json('User Added'))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  User.findById(id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

router.put('/:id', (req, res) => {
  const { id } = req.params
  User.findByIdAndUpdate(id, req.body, { new: true })
    .then(user => res.json(user))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

router.post('/login', (req, res) => {
  const { email, password } = req.body
  User.findOne({ email, password })
    .then(data => {
      if (data) {
        res.json(data)
      } else {
        res.json('User not found')
      }
    })
    .catch(err => res.status(400).json(`Error: ${err}`))
})

// router.put('/cart/:id', (req, res) => {
//   const { id } = req.params
//   User.findByIdAndUpdate(id)
//     .then(user => {
//       user.cart.push(req.body)

//       res.json(user)
//     })
//     .catch(err => res.status(400).json(`Error: ${err}`))
// })

router.get('/cart/:id', (req, res) => {
  const { id } = req.params
  User.findById(id)
    .then(user => res.json(user.cart))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

export default router
