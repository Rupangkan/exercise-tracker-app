const router = require('express').Router()
let exercise = require('../models/exercise.model')

router.route('/').get((req, res) => {
    exercise.find()
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').get((req, res) => {
    const username = req.body.username
    const description = req.body.description
    const duration = Number(req.body.duration)
    const date = Date.parse(req.body.date)

    const newExercise = new Exericise({
        username,
        description,
        duration,
        date,
    })

    newExercise.save()
    .then(() => res.json('Exercise added!'))
    .catch(err => res.status(400).json('Error: ' + err))

})

module.exports = router