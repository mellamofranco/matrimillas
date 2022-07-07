const http = require('http');
const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());
app.use(express.static("express"));

var ip = require("ip");
console.log ( ip.address() );

app.set('view engine', 'ejs');



app.use('/1', function(req,res){
    //res.sendFile(path.join(__dirname + '/client-pages/client1.html'));
    //__dirname : It will resolve to your project folder.
    res.render('pages/client1', { ip: ip.address() });
});

app.use('/2', function(req,res){
    //res.sendFile(path.join(__dirname + '/client-pages/client2.html'));
    //__dirname : It will resolve to your project folder.
    res.render('pages/client2', { ip: ip.address() });
});

app.use('/3', function(req,res){
    //res.sendFile(path.join(__dirname + '/client-pages/client3.html'));
    //__dirname : It will resolve to your project folder.
    res.render('pages/client3', { ip: ip.address() });
});

app.use('/4', function(req,res){
    //res.sendFile(path.join(__dirname + '/client-pages/client4.html'));
    //__dirname : It will resolve to your project folder.
    res.render('pages/client4', { ip: ip.address() });
});

app.use('/manager', function(req,res){
    //res.sendFile(path.join(__dirname + '/client-pages/gif-manager.html'));
    res.render('pages/gif-manager', { ip: ip.address() });
});

const server = http.createServer(app);
const host = '0.0.0.0';
const port = 3002;
server.listen(port, host);
console.debug(`Server listening in host ${host} on port ${port}`);