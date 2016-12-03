/*
User Story: I can get the IP address, language and operating system for my browser.

https://cryptic-ridge-9197.herokuapp.com/api/whoami/

*/
/*
/\((.*)\)/g[1]
*/
var os = require('os');

module.exports = function(app) {
    app.get('/node-examples/request-header', function(req, res) {

        res.json({
            "ipaddress": req.headers['x-forwarded-for'] || 
                req.connection.remoteAddress || 
                req.socket.remoteAddress ||
                req.connection.socket.remoteAddress,
            "language": req.acceptsLanguages()[0],
            "software": req.headers['user-agent'].match(/\((.*?)\)/)[1]
        });
    });
};
