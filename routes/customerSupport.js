import express from 'express'
import Support from '../models/Support.js'

const router = express.Router()

router.get('/', (req, res) => {
  Support.find()
    .then(support => res.json(support))
    .catch(err => res.status(400).json(`Error: ${err}`))
})
router.post('/', (req, res) => {
  console.log(req.body)
  const { name, email, subject, message } = req.body
  const newSupport = new Support({ name, email, subject, message })
  newSupport
    .save()
    .then(() =>
      res.json({
        message: 'Message Recived Successfully',
        status: 200
      })
    )
    .catch(err => res.status(400).json(`Error: ${err}`))
})

export default router
