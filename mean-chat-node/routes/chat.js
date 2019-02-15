var express = require('express');
var router = express.Router();
const io = require('socket.io')(require('http').createServer(express()));

//listen on every connection
io.on('connection', (socket) => {
  socket.username = 'Anonymous';
  socket.on('new_message', (data) => {
    //broadcasting new message
    io.sockets.emit('new_message', {message: data.message, username: data.username});
  });
});

router.post('/', function(req, res, next) {
  console.log('trip');
  res.send(req, function(err, message) {
    if(err) return next(err);
    res.json(message);
  });
});

module.exports = router;
