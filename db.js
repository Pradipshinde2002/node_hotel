const mongoose = require('mongoose')
require('dotenv').config()

//const mongoURL = "mongodb://localhost:27017/hotel"
const mongoURL= process.env.DB_URL
// connect mongodb
mongoose.connect(mongoURL)

const db = mongoose.connection

db.on("connected", () => {
    console.log("connected to mongodb server")
})

db.on("error", (err) => {
    console.log("error in mongodb connection", err)
})

db.on("disconnected", () => {
    console.log("mongodb disconnected")
})

module.exports = db