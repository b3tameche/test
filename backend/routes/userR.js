const router = require('express').Router()

const User = require('../models/UserModel')

router.route('/:username').get(async (req, res) => {
  const userID = await User.exists({username: req.params.username})
  return userID ? res.json({exists: true}) : res.json({exists: false})
})

module.exports = router