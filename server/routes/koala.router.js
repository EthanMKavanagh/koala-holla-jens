const express = require('express');
const { Pool } = require('pg');
const koalaRouter = express.Router();

// DB CONNECTION

// GET
koalaRouter.get('/:id', (req, res) => {
  console.log('Inside of Router get');
  let koalaId = req.params.id;
  // GET HERE
  res.sendStatus(200);
}); // end GET

// POST
koalaRouter.post('/', (req, res) => {
  console.log('in /post router', req.body);
  const queryString = `INSERT INTO "koala_inventory" (id, name, gender, age, ready_to_transfer, notes) VALUES ( $1, $2, $3, $4, $5, $6 )`;
  Pool.query(queryString, [
    req.body.id,
    req.body.name,
    req.body.age,
    req.body.gender,
    req.body.readyForTransfer,
    req.body.notes,
  ]);
  let newKoala = req.body;
  res.send(newKoala);
});

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
