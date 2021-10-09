const express = require('express');
const path = require('path');
const port  = 80;
const app= express();
app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));
app.get('/', (req,res) => {
    res.status(200).render('home.pug');
})
app.get('/searching', (req,res) => {
    res.status(200).render('searching.pug');
})
app.get('/sorting', (req,res) => {
    res.status(200).render('sorting.pug');
})
app.get('/linear', (req,res) => {
    res.status(200).render('linear.pug');
})
app.get('/binary', (req,res) => {
    res.status(200).render('binary.pug');
})
app.listen( port ,() => {
    console.log(`Server is running on ${port}`);
})