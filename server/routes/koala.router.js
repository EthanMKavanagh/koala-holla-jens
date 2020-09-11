const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION


// GET
koalaRouter.get( '/', (req, res) => {
    console.log('Inside of Router get');
    res.sendStatus( 200 );
}); // end GET

// POST
koalaRouter.post('/', (req, res) => {
    console.log(req.body);
    let newKoala = req.body
    res.send(newKoala)
})


// PUT
koalaRouter.put()


// DELETE
koalaRouter.delete()

module.exports = koalaRouter;