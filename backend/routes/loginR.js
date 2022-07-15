require('dotenv').config()

const router = require('express').Router()
const bcrypt = require('bcrypt')

const User = require('../models/UserModel')

router.route('/').post(async (req, res) => {
  const {username, password} = req.body
  
  if (!(username && password)) {
    res.status(400).json('both fields are required')
  }
  
  const user = await User.findOne({username: username})
  
  if (user && (await bcrypt.compare(password, user.passwordHash))) {
    res.status(200).json('User exists')
  }
  res.end()
})

module.exports = router