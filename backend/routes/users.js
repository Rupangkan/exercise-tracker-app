const router = require('express').Router()
let Users = require('../models/user.model')

router.route('/').get((req,res) => {
    Users.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req,res) => {
    // Try to change req.body.userName to req.body.username
    const userName = req.body.userName

    const newUser = new User({userName})

    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router
