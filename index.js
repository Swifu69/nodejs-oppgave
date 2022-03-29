const express = require('express')
const path = require('path');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) =>{
    res.render('index', { year: new Date().getFullYear() })
})

app.get('/express', (req, res) =>{
    res.render('express', { year: new Date().getFullYear() })
})

app.get('/nodejs', (req, res) =>{
    res.render('nodejs', { year: new Date().getFullYear() })
})

app.get('/about', (req, res) =>{
    res.render('about', { year: new Date().getFullYear() })
})

app.listen()

