

function registerConnectionHanlder (io, socket) {
    socket.on('disconnect', () => {
        console.log(`The socket disconnected with id: ${socket.id}`);
    });
}

module.exports = registerConnectionHanlder