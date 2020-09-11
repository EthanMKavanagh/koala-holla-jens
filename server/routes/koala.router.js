const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION


// GET
koalaRouter.get( '/:id', (req, res) => {
    console.log('Inside of Router get');
    let koalaId = req.params.id;
    // GET HERE

}); // end GET

// POST
koalaRouter.post('/', (req, res) => {
    console.log(req.body);
    let newKoala = req.body
    res.send(newKoala)
})


// PUT
koalaRouter.put('/koalas/:id', (req, res)=>{
    let koalaId = req.params.id;
    let queryString = '';
    console.log('params:', songId, req.body);
    res.sendStatus(200); // 200 sends "OK"
})


// DELETE
koalaRouter.delete()

module.exports = koalaRouter;