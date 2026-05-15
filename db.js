const mongoose = require('mongoose')

const mongoURL = "mongodb://localhost:27017/hotel"

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