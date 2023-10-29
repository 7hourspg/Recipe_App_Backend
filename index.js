import express from 'express'
import apiRoutes from './routes/api.js'
import connectDB from './db/connect.js'
import bodyParser from 'body-parser'
import userRoutes from './routes/users.js'
import connnectUser from './db/connectUser.js'
import cartRoutes from './routes/cart.js'

const app = express()

app.use(bodyParser.json())
app.use('/api/recipes', apiRoutes)
app.use('/api/users', userRoutes)
app.use('/api/user', cartRoutes)

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Get All Food Recipes On <a href="/api/recipes">CLICK HERE </a>')
})

app.listen(port, async () => {
  await connectDB()
  await connnectUser()
  console.log(`Server is listening on port ${port}`)
})
