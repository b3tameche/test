const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  mobile: {
    type: Number,
    required: true
  }
})

const Contact = mongoose.model('Contact', contactSchema)

module.exports = Contact