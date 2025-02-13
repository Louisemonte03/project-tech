const express = require ('express')
const app = express ()

app.set('view engine', 'ejs');
 // voegt toe dat we met ejs werken 

app 
.use('/static', express.static('static'));

app 
.get('/', onhome)
.get ('/contact', contact)
.get ('/about', about)
.get ('/login', login)
.get ('/detail/:username', username)
.listen (8000)

function login(req, res){
    res.send ('<h1> Hello bij login </h1>');
}
function contact(req, res){
    res.send ('<h1> Hello bij contact </h1>');
}

function onhome( req, res){
    res.send ('<h1> Hello world </h1>');
}

function about( req, res){
    res.send ('<h1> about </h1>');
}

function username (req, res){
    res.render('detail', {username: req.params.username}); // req.params
}

app.use(function(req, res){
    res.status(404).send("Not found prutsern");
});