const router = require('express').Router();
const puppies = require('../puppiesDB.js');

//gets all puppies
router.get('/', (req, res, next) => {
    res.send(puppies);
})
//gets one puppy
router.get('/:id', (req, res, next) => {
    if (puppies[+req.params.id]) { 
        res.send(puppies[+req.params.id])
    } else {
        res.sendStatus(404);
        res.end();
    }
})
//updates a puppy
router.put('/:id', (req, res, next) => {
    if (puppies[+req.params.id]) {
        //reassign the puppy
        puppies[+req.params.id] = req.body
        //resource status updated
        res.sendStatus(302);
    } else {
        res.sendStatus(404);
    }
})
//adds a puppy
router.post('/', (req, res, next) =>{
    puppies.push(req.body);
    res.sendStatus(201); //resource created status
})

module.exports = router;