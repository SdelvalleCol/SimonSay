"use strict";
const express = require('express');
const path = require('path');

const app = express();

app.listen(3000, () => {
    console.log("Server ONLIVE");
});

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/data',(req,res)=>{
    res.sendFile(path.join(__dirname, '/public/data.html'));
})
