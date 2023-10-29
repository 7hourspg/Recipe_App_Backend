import mongoose from 'mongoose'

const URL = `mongodb+srv://rajiv840704:rajiv840704@cluster0.vyyhoaf.mongodb.net/?retryWrites=true&w=majority`

const connnectUser = () => {
  try {
    mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    })

    console.log(`MongoDB connected Successfully`)
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

export default connnectUser
