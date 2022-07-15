const mongoose = require('mongoose')
require('dotenv').config()

const URI = process.env.mongo

const connect = () => {
    try {
        mongoose.connect(URI)
        console.log('Connected to database')
    } catch (e) {
        console.log('Error occured while trying to connect to database: ' + e)
    }
}

module.exports = connect;