var express = require('express');
var path = require('path');

var app = express();

require(path.join(__dirname + '/TimestampMicroservice/Timestamp'))(app);

app.use(express.static(path.join(__dirname + '/css')));

app.get('/node-examples', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(process.argv[2] || 8080, function() {
    console.log('Server started');
});
