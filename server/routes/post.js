const express = require('express');
const router = express.Router();
const axios = require('axios');

var POSTAPI = 'https://jsonplaceholder.typicode.com';

router.get('/',(req,res)=>{
    axios.get(`${POSTAPI}/posts`).then(posts=>{
        res.send(posts.data);
    });
});

module.exports = router;