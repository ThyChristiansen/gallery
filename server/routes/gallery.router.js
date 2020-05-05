const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');


// const galleryItems = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE

//DELETE Route
router.delete('/:id', (req, res) => {
    let pictureId = req.params.id;// We are using a request parameter (req.params) to identify
    // the specific picture. We expect this will be an id from the database.

    console.log('Delete request for this id: ', pictureId);
    let sqlText = `DELETE FROM gallery WHERE id = $1`;
    pool.query(sqlText, [pictureId])
        .then(result => {
            console.log('in DELETE router')
            res.sendStatus(200);
        }).catch(err => {
            console.log('Error in DELETE route', err);
            res.sendStatus(500);
        })
})

// PUT Route
// Change like on picture
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    // likes will come from the client and say like

    let sqlText = `UPDATE gallery SET likes = likes + 1 WHERE id=$1`;

    pool.query(sqlText, [galleryId])
        .then(result => {
            res.sendStatus(200);
        })
        .catch(err => {
            console.log('Error in PUT request', err)
            res.sendStatus(500);
        })
    // res.sendStatus(200);
}); // END PUT Route

//GET Route
// When you fetch all things in these GET routes, strongly encourage ORDER BY
// so picture data always come back in a consistent order by id
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
router.post('/', (req, res) => { // use POST to sent the data that user input from database
    console.log(req.params);
    const newPicture = req.body;
    console.log(req.body);
    // const newDescription = req.body.description;
    // console.log(newDescription);

    const queryString = `INSERT INTO gallery (path,description) VALUES ($1,$2);`
    // the $1, $2 get substituted with the values from the array below
    pool.query(queryString, [newPicture.path, newPicture.description])
        .then((result => {
            console.log('sending this: ', result);
            res.sendStatus(200);
        })).catch(err => {
            console.log('Error in POST request', err)
            res.sendStatus(500);
        })
    // res.sendStatus(200);
}); // END PUT Route


module.exports = router;