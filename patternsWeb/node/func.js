var base = 2;
exports.addTwo = function(input){
    return parseInt(input) + base;
};

var addTwo = require('./addTwo').addTwo;
var base = 10;
console log(addTwo(base));

console.log(global);

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    var nm = require('url').parse(req.url, true).query.nm;

    if(nm === undefined)
        nm = 'world';
    if(nm == 'burningbird'){
        var file = '../img/bg/old_tree.jpg';
        fs.stat(file, function(err, stat){
            if(err){
                console.error(err);
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.end("Sorry, Burningbird isn't around right now \n");
            } else{
                var img = fs.readFileSync(file);
                res.contentType = 'image/jpg';
                res.contentLength = stat.size;
                res.end(img, 'binary');
            }
        });
    } else{
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello ' + nm + '\n');
    }
}).listen(8124);
console.log('Server running at http://127.0.0.1:8124/');