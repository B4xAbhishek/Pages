const router = require('express').Router();
let Sign = require('../models/sign.model');

router.route('/get').get((req,res) => {
    Sign.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' +err));
});

router.route('/').post((req,res) => {
    const name = req.body.name;
    const password = req.body.password;
    const newSign = new Sign({name,password});

    newSign.save()
        .then(() => res.json())
        .catch(err => res.status(400).json('Error from backend: '+err));
});

module.exports = router;