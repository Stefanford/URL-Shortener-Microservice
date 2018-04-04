var expres = require('express');
var bodyParser = require('body-parser');
var cors  = require('cors');
var mongoose = require('mongoose');



var project = module.exports = expres();
project.use(bodyParser.json());
project.use(cors());
project.use(expres.static(__dirname + "/public");

project.get('someURL/: short(*)', function(res, err, next){
    var shortUrl = req.params.shortUrl;
});


project.listen(8000, function(){
    console.log('Node is working');
})