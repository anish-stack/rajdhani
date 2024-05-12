const express = require('express')
const dotenv = require('dotenv')
const app = express()
const cors = require('cors')
const ConnectDb = require('./config/database')
const router = require('./routes/routes')
dotenv.config()


app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api/v1', router)
ConnectDb()

app.listen(process.env.PORT, () => {
    console.log(`Server is connected ${process.env.PORT}...`)
})