import mongoose from 'mongoose'

const recipeSchema = new mongoose.Schema({
  title: String,
  price: Number,
  category: String,
  image: String,
  quantity: Number
})

const Recipe = mongoose.model('Recipe', recipeSchema)

export default Recipe
