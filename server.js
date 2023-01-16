const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const Moniker = require('moniker');

const app = express();
const server = http.Server(app);
const io = socketIO(server);
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/index.html');
});

app.use(express.static('./client'));

server.listen(port, () => {
  console.log('listening on:' + port);
});

io.on('connection', socket => {
  socket.username = Moniker.choose();
  socket.emit('set username', socket.username);
  socket.broadcast.emit('user joined', socket.username);
});