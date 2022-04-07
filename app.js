const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.resolve()+"/public/index.html");
});

app.get('/style.css', (req, res) => {
    res.sendFile(path.resolve()+"/public/style.css")
})

app.get("/script.js", (req, res)=> {
    res.sendFile(path.resolve()+"/public/script.js")
})

app.listen(3000);