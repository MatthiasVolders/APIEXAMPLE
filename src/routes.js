const express = require('express');
const router = express.Router();
const campus = require('./models/campus');


/**
 * Routes
 */

/**
 * Homepage
 */

 router.get('/', (req, res) => {
    console.log('/ route called');
    res.send(
        '<h1>Welcome to my api, these are the available routes:</h1>'
        +'<h2>/</h2>'
        +'Where you are right now'

        +'<hr>'

        +'<h2>/Campus</h2>'
        +'Returns all campuses in the database using .find()'

        +'<hr>'
        );
});

/**
 * Campus route
*/

router.get('/campus', async(req, res) => {
    console.log('/campus route called');
    try{
        res.json(await Campus.find());
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

/**
 * Returns one single campus in the database using .findById(objectId)
 * uses req.params.id, wich means the id is passed in the url
 * /campus/Id returns the campus with that Id
 */

router.get('/campus/:id', async (req, res) => {
    console.log('/campus/:id route called');
    try{
        res.send(await Campus.findById(req.params.id));
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

/**
 * Create campus
 * adds one single campus to the database using .create({data})
 * uses req.body, wich means an object is passed
 * /campus/create is the appropriate route  
 */

router.post('/campus/create', async (req, res) => {
    console.log('/campus/create route called');
    try{
        res.send(await Campus.create(req.body));
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

/**
 * route updaten
 * updates one single campus in the database using findByIdAndUpdate(objectId, {$set: data})
 * uses req.params.id, wich means the id is passed in the url
 * also uses req.body, wich means an object is passed
 * 
 * /campus/update/Id updates the campus with that Id with the data passed in req.body
 */

router.put('/campus/update/:id', async (req, res) => {
    console.log('/campus/update/:id route called');
    try{
        res.send(await Campus.findByIdAndUpdate(req.params.id, {$set: req.body}));
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

/**
 * route verwijderen
 * Deletes one single campus from the database using .findByIdAndDelete(objectId)
 * uses req.params.id, wich means the id is passed in the url
 * /campus/delete/id deletes the campus with that id from the database
 */

router.delete('/campus/delete/:id', async (req, res) => {
    console.log('/campus/delete/:id route is called');
    try{
        res.send(await Campus.findByIdAndDelete(req.params.id));
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});



module.exports = router;