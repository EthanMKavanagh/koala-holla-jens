const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION


// GET
koalaRouter.get()

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