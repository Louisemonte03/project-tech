const express = require ('express')
const app = express ()

app.set('views engine', 'ejs'); // voegt toe dat we met ejs werken 

app 
.use('/static', express.static('static'));

app 
.get('/', onhome)
.get ('/about', about)
.get ('/detail/:username', username)
.listen (8000)


function onhome( req, res){
    res.send ('<h1> Hello world </h1>');
}

function about( req, res){
    res.send ('<h1> about </h1>');
}

function username (req, res){
    res.render('detail', {username: req.params.username}); // req.params
}