const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');
// const galleryItems = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    let likes = req.body.likes;
    let sqlText = '';

    // for (const galleryItem of galleryItems) {
        if (likes === `${sqlText}`) {
            // galleryItem.likes += 1;
            sqlText = `UPDATE gallery SET likes = likes + 1 WHERE id=$1`;
        }else{
            res.sendStatus(500);
            return; // if error, this one to tell the router PUT stop here, don't run the code below
        }
        // if(!likes){
        //     res.sendStatus(500);
        //     return;
        // }
        // let sqlText = `UPDATE gallery SET likes = likes + 1 WHERE id=$1`;

    // }
    pool.query(sqlText,[galleryId])
    .then(result=>{
        res.sendStatus(200);
    })
    .catch(err=>{
        console.log('Error in PUT request',err)
        res.sendStatus(500);
    })
    // res.sendStatus(200);
}); // END PUT Route


// GET Route
// router.get('/', (req, res) => {
//     res.send(galleryItems);
// }); // END GET Route

router.get('/', (req, res) => {
    // Get all of the treats from the database
    const sqlText = `SELECT * FROM gallery ORDER BY id`;
    pool.query(sqlText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        });
});

//POST Route
router.post('/', (req, res) => {
    console.log(req.params);
    const newPicture = req.body.path;
    console.log(req.body.path);

    const queryString = `INSERT INTO gallery (path) VALUES ($1);`
    pool.query(queryString, [newPicture])
        .then((result => {
            console.log('sending this: ',result);
            res.sendStatus(200);
        })).catch(err => {
            console.log('Error in POST request', err)
            res.sendStatus(500);
        })
    // res.sendStatus(200);
}); // END PUT Route


module.exports = router;