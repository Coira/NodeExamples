/*
User Story: I can get the IP address, language and operating system for my browser.

https://cryptic-ridge-9197.herokuapp.com/api/whoami/

*/

var os = require('os');

module.exports = function(app) {
    app.get('/node-examples/request-header', function(req, res) {

        res.json({
            "ipaddress": req.ip,
            "language": req.acceptsLanguages()[0],
            "software": os.type() + " " + os.release()
        });
    });
};
