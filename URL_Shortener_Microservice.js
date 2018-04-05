

var expres = require('express');
var bodyParser = require('body-parser');
var cors  = require('cors');
var mongoose = require('mongoose');
var project  = expres();

project.use(bodyParser.json());
project.use(cors());
project.use(expres.static(__dirname + "/public"));

project.get('/someURL/:shortUrl(*)', function(req, res, next){
    var shortUrl = req.params.shortUrl;

    var regex = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;

    if(regex.test())
    return res.json({shortUrl});
});


project.listen(8000, function(){
    console.log('Node is working');
})