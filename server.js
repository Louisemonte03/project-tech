const express = require ('express')
const app = express ()

app 
.use('/static', express.static('static'))


app 
.get('/', onhome)
.get ("/about", about)
.listen (8000)

function onhome( req, res){
    res.send ('<h1> Hello world </h1>');
}

function about( req, res){
    res.send ('<h1> about </h1>');
}



