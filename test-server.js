const fs = require('fs');

const express = require('express');
const app = new express();

const index = fs.readFileSync('./public/index.html');
const js = fs.readFileSync('dist/bundle.js');

app.get('/dist/bundle.js', (req, res) => {
    res.end(js);
});

app.get('/*', (req, res) => {
    res.end(index);
});

app.listen(8888);
