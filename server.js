const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

const db = require('./db')
require('dotenv').config()

const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("hello from server")
})


const personRoutes = require('./routes/personRoute')

app.use('/person', personRoutes)

const menuRoutes = require('./routes/menuRoutes')

app.use('/menu', menuRoutes)



app.listen(PORT, () => {
    console.log("server is running on port 3000")
})
