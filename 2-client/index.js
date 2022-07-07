//Create a server that can send back static files
const http = require("http");
const url = require("url");
const fs = require("fs");

//npm i mime-types
const lookup = require("mime-types").lookup;

var ejs = require('ejs');

let ip;

fs.readFile('../ip.txt', 'utf8' , (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(data)
    ip=data;
})

const server = http.createServer((req, res) => {
  let parsedURL = url.parse(req.url, true);
  let path = parsedURL.path.replace(/^\/+|\/+$/g, "");
  switch(path){
    case "1":
        var htmlContent = fs.readFileSync(__dirname + '/views/pages/client1.ejs', 'utf8');
        var htmlRenderized = ejs.render(htmlContent, {filename: 'client1.ejs', ip });
        res.setHeader("X-Content-Type-Options", "nosniff");
        res.writeHead(200, { "Content-type": 'text/html' });
        res.end(htmlRenderized);
        break;
    case "2":
        var htmlContent = fs.readFileSync(__dirname + '/views/pages/client2.ejs', 'utf8');
        var htmlRenderized = ejs.render(htmlContent, {filename: 'client2.ejs', ip });
        res.setHeader("X-Content-Type-Options", "nosniff");
        res.writeHead(200, { "Content-type": 'text/html' });
        res.end(htmlRenderized);
        break;
    case "3":
        var htmlContent = fs.readFileSync(__dirname + '/views/pages/client3.ejs', 'utf8');
        var htmlRenderized = ejs.render(htmlContent, {filename: 'client3.ejs', ip });
        res.setHeader("X-Content-Type-Options", "nosniff");
        res.writeHead(200, { "Content-type": 'text/html' });
        res.end(htmlRenderized);
        break;
    case "4":
        var htmlContent = fs.readFileSync(__dirname + '/views/pages/client4.ejs', 'utf8');
        var htmlRenderized = ejs.render(htmlContent, {filename: 'client4.ejs', ip });
        res.setHeader("X-Content-Type-Options", "nosniff");
        res.writeHead(200, { "Content-type": 'text/html' });
        res.end(htmlRenderized);
        break;
    case "manager":
        var htmlContent = fs.readFileSync(__dirname + '/views/pages/gif-manager.ejs', 'utf8');
        var htmlRenderized = ejs.render(htmlContent, {filename: 'gif-manager.ejs', ip });
        res.setHeader("X-Content-Type-Options", "nosniff");
        res.writeHead(200, { "Content-type": 'text/html' });
        res.end(htmlRenderized);
        break;
    default:

    
        console.log(`Requested path ${path} `);

        let file = __dirname + "/" + path;
        fs.readFile(file, function(err, content) {
            if (err) {
                console.log(`File Not Found ${file}`);
                res.writeHead(404);
                res.end();
            } else {
                console.log(`Returning ${path}`);
                res.setHeader("X-Content-Type-Options", "nosniff");
                let mime = lookup(path);
                res.writeHead(200, { "Content-type": mime });
                res.end(content);
            }
        });

        break;
    }
});

server.listen(3002, '0.0.0.0', () => {
  console.log("Listening on port 3002");
});