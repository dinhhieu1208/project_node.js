//const express = require('express')
import express from 'express';
import configViewEngine from './configs/viewenigne';
const app = express();
const port = 8080

// app.get('/', (_req, res) => {
//     res.send('Hello World!')
// })
configViewEngine(app);

// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname, './index.html'));
// });
app.get('/', (req, res) => {
    res.render("test/index.ejs")
})
app.listen(port, () => {
    console.log(`Example app listening at https://localhost: ${port}`)
})