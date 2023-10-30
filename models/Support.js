import mongoose from 'mongoose'

const supportSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String
})

const Support = mongoose.model('Support', supportSchema)

export default Support
