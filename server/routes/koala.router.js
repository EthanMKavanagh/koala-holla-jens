const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION


// GET
koalaRouter.get( '/:id', (req, res) => {
    console.log('Inside of Router get');
    let koalaId = req.params.id;
    
}); // end GET

// POST
koalaRouter.post()


// PUT
koalaRouter.put()


// DELETE
koalaRouter.delete()

module.exports = koalaRouter;