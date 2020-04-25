const config = require('./app.config');
const io = require('socket.io-client');
const fromEvent = require('rxjs').fromEvent;
var socket = io.connect(`http://${config.IP}:${config.PORT}/`, {
    reconnection: true
});

const onConnect = fromEvent(socket, 'connect');
onConnect.subscribe(() => {
    console.log('connected to localhost:3000');
});

/*socket.on('connect', function () {
    console.log('connected to localhost:3000');
    socket.on('clientEvent', function (data) {
        console.log('message from the server:', data);
        socket.emit('serverEvent', "thanks server! for sending '" + data + "'");
    });
});*/