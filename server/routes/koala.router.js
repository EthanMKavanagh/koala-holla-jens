const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION


// GET
koalaRouter.get( '/', (req, res) => {
    console.log('Inside of Router get');
    res.sendStatus( 200 );
}); // end GET

// POST
koalaRouter.post()


// PUT
koalaRouter.put('/koalas/:)


// DELETE
koalaRouter.delete()

module.exports = koalaRouter;