require('./config/db'); 

const express = require('express');
const app = express();

const UserRouter = require('./api/user');

const bodyParser = require('express').json;
app.use(bodyParser());

const MemeRouter = require("./api/crudapp/memeroutes"); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/user', UserRouter);
app.use('/meme', MemeRouter);



app.listen(3000, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", 3000);
})





