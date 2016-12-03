var express = require('express');
var path = require('path');

var app = express();

require(path.join(__dirname + '/TimestampMicroservice/timestamp'))(app);
require(path.join(__dirname + '/RequestHeader/requestHeader'))(app);

app.use(express.static(path.join(__dirname + '/css')));

app.get('/node-examples', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(process.env.PORT || 8080, function() {
    console.log('Server started');
});
