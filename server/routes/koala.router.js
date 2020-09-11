const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION





// GET
koalaRouter.get( '/:id', (req, res) => {
    console.log('Inside of Router get');
    let koalaId = req.params.id;
    // GET HERE
    res.sendStatus(200);

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
    let queryString = '';
    console.log('params:', koalaId, req.body);
    res.sendStatus(200); // 200 sends "OK"
    if(req.body.readyStatus === false){
        queryString = `UPDATE "koala_inventory"
        SET "ready_to_transfer" = 'T'
        WHERE "id" = $1;`;
    }
    else{
        console.log('send better data');
    }
    pool.query(queryString, [koalaId])
        .then(result =>{
            console.log('Result from PUT:', result);
            res.sendStatus(200);
        })
        .catch(err=>{
            console.log('Error deleted record', err);
            res.sendStatus(500);
        });
});


// DELETE
//koalaRouter.delete();

module.exports = koalaRouter;