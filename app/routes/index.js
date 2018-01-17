`use strict`

const router = require('express').Router();
const bodyParser = require('body-parser');

const greeting = require('../models/greeting');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.route(`/allGreetings`)
    .get((req, res) => {
        // Get Greeting
        greeting.find({}, (err, payload) => {
            if (err) {
                res.status(500).send({ error: err })
            }
            res.json(payload)
        })
    })

router.route(`/greeting`)
    .get((req, res) => {

        // Get random greeting
        greeting.count().exec((err, count) => {
            // Get a random entry
            const random = Math.round(Math.random() * count)

            // Get all greetings but return only one randomly selected
            greeting.findOne().skip(random).exec((err, result) => {
                res.status(200).json(result)
            })
        })

    })
    .post((req, res) => {
        // Post Greeting
        // let newGreeting = new greeting({})
        // newGreeting.save((err, createdGreeting) => {
        //     if(err) {
        //         res.status(500).send(err);
        //     }
        //     res.status(200).json(createdGreeting)
        // })

    })
    .put((req, res) => {
        // Update Greeting
    })
    .delete((req, res) => {
        // Delete Greeting
    })

module.exports = router;