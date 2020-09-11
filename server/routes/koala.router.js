const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION

// GET
koalaRouter.get('/:id', (req, res) => {
  console.log('Inside of Router get');
  let koalaId = req.params.id;
  // GET HERE
  res.sendStatus(200);
=======
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
  console.log('in /post router', req.body);
  const queryString = `INSERT INTO "koala_inventory" (id, name, gender, age, ready_to_transfer, notes) VALUES ( $1, $2, $3, $4, $5,)`;
  Pool.query(queryString, [
    req.body.name,
    req.body.age,
    req.body.gender,
    req.body.readyForTransfer,
    req.body.notes,
  ])
    .then((results) => {
      res.sendStatus(201); //success, created
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    }); //end query
}); //end koala post

// PUT
koalaRouter.put('/:id', (req, res) => {
  let koalaId = req.params.id;
  //let queryString = '';
  console.log('params:', koalaId, req.body);
  res.sendStatus(200); // 200 sends "OK"
});

// DELETE
//koalaRouter.delete();

module.exports = koalaRouter;
