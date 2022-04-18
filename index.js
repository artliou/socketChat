var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

// import express from 'express';
// import webpack from 'webpack';
// import path from 'path';
// import config from '../webpack.config.dev';
// import open from 'open';
// import socket from 'socket.io'
// import { Server } from 'http'

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
  socket.on('chat message', function(msg) {
    io.emit('chat message', msg);
  });
});

http.listen(port, function() {
  console.log('listening on *:' + port);
});