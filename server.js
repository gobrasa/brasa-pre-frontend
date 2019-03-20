const express = require("express");
const http = require('http');
const path = require('path');

const app = express();
const port = process.env.PORT || 4200;

app.use(express.static(__dirname+'/dist/brasa-pre-frontend/'));

app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname + '/dist/brasa-pre-frontend/index.html'))
 });
 

// app.get('/*', (req,res) => res.sendFile(path.join(__dirname)));

// const server = http.createServer(app);

//app.listen(port, () => console.log("Server is running"));

app.listen(process.env.PORT, process.env.IP);
