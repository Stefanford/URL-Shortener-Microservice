var mongoose = require('mongoose');
var schema = mongoose.Schema;
var urlSchema = new Schema({
    initialUrl: "",
    shortedUrl: ""
},
{
    timestamps: true
});

var model = mongoose.model("shortUrl", urlSchema);

module.exports = model;