const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.Server(app);
const io = socketIO(server);
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/index.html');
});

app.get('/chat', (req, res) => {
  res.sendFile(__dirname + '/client/chat.html');
});

app.use(express.static('./server/client'));

server.listen(port, () => {
  console.log('listening on:' + port);
});

io.on('connection', socket => {
  socket.on('set username', (username) => {
    socket.username = username;
    socket.broadcast.emit('user joined', username);
  });

  socket.on('disconnect',  () => {
    socket.broadcast.emit('user left', socket.username);
  })

  socket.on('chat message', message => {
    socket.broadcast.emit('chat message', {
        name: socket.username,
        time: new Date(),
        message,
    });

    socket.emit('chat message', {
        name: 'you',
        time: new Date(),
        message,
    });
  })

  socket.on('user typing', () => {
    socket.broadcast.emit('user typing', socket.username);
  });

});