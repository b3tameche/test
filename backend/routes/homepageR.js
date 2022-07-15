const router = require('express').Router()

router.route('/').get((req, res) => {
    res.json('contacts requested')
})

router.route('addContact').post((req, res) => {
    res.json('contact addition requested')
})

router.route('/delete/:username').delete((req, res) => {
    res.json('delete requested')
})

router.route('/update/:username').patch((req, res) => {
    res.json('patch requested')
})

module.exports = router