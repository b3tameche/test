const router = require('express').Router();
const bcrypt = require('bcrypt')

const User = require('../models/UserModel')

router.route('/addUser').post(async (req, res) => {
  const salt = await bcrypt.genSalt()
  const passHash = await bcrypt.hash(req.body.password, salt)
  
  const flag = await User.exists({username: req.body.username})
  if (flag) return res.json('Such username already exists')

  await User.create({
      username: req.body.username,
      passwordHash: passHash
  }).catch((err) => {res.json('Error occured while registering user: ' + err)})

  res.json('User added')
})

module.exports = router