import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  cart: [
    {
      productId: String,
      title: String,
      price: Number,
      category: String,
      image: String,
      quantity: Number
    }
  ]
})

const User = mongoose.model('User', userSchema)

export default User
