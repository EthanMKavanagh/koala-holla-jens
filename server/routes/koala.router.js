const express = require('express');
const pg = require('pg');
const koalaRouter = express.Router();

// DB CONNECTION
const Pool = pg.Pool;
const pool = new Pool({
    database: "koala_holla",
    host: "localhost",
    post: 5432,
    max: 12,
    idleTimeoutMillis: 30000
}); // end pool setup


// GET
koalaRouter.get( '/:id', (req, res) => {
    console.log('Inside of Router get');
    let koalaId = req.params.id;
    const queryString = 'SELECT * FROM "koala_inventory" where "id" = $1;';
    pool.query(queryString, [koalaId]).then((response) => {
        res.sendStatus(200);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    }); // end query
}); // end GET

// POST
koalaRouter.post('/', (req, res) => {
    console.log(req.body);
    let newKoala = req.body
    res.send(newKoala)
})


// PUT
koalaRouter.put('/:id', (req, res)=>{
    let koalaId = req.params.id;
    //let queryString = '';
    console.log('params:', koalaId, req.body);
    res.sendStatus(200); // 200 sends "OK"
})


// DELETE
//koalaRouter.delete();

module.exports = koalaRouter;