const express = require('express');
const router = express.Router();
const Post = require('../models/posts');

// Fetching data using GET method
router.get('/', (req, res) => {
    Post.find()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.json({
                message:err
            });
        });
});

// router.get('/specific', (req, res) => {
//     res.send('We are on specific posts');
// });

// Creating data using POST Method

// Using Promises
router.post('/', (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    post.save()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.json({
                message: err
            });
        });
});

// Using Async Await

// router.post('/', async (req, res) => {
//     const post = new Post({
//         title: req.body.title,
//         description: req.body.description
//     });
//     try {
//         const savedPost = await post.save();
//         res.status(200).json(savedPost);
//     }
//     catch(err){
//         res.json({message: err});
//     }
// });

// Getting a specific post using ID
router.get('/:ID', (req, res) => {
    Post.findById(req.params.ID)
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        res.json({
            message: err
        })
    })
})

//Deleting a post using DELETE method

router.delete('/:ID', (req, res) => {
    Post.remove({_id: req.params.ID})
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        res.json({message:err});
    })
})

//Updating a post using PATCH method

router.patch('/:ID', (req, res) => {
    Post.updateOne({_id: req.params.ID}, {$set: {title: req.body.title}})
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        res.json({message:err});
    })
});
// Exporting the module
module.exports = router;