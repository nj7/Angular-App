const express = require('express');
const path = require('path');
const app = express();

// Getting our Posts call
const post = require('./server/routes/post');

//using  middleware
app.use(express.static(path.join(__dirname, 'dist/ang-node')));
app.use('/posts',post);

// Catch all the route and return it to index 
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'/dist/ang-node/index.html'));
})

const port = process.env.PORT|| 4600;

//listening on port port 
app.listen(port,(req,res)=>{
    console.log(`Server is running  on port ${port} `);
})