const { io } = require('../index');

io.on('connection', cliente => {
    console.log('Cliente conectado');

    cliente.on('disconnect', () => {
        console.log('Cliente desconectado');
    });

    cliente.on('mensaje', (payload) => {
        console.log("Mensaje!! ", payload);

        io.emit('mensaje', {admin: 'Nuevo mensaje'});
    });
});