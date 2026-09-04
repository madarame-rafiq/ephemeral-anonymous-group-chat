
const { Server } = require('socket.io');
const registerHandlers = require('./registerHanlder');

function initializeSokcetServer (httpServer) {
    const io = new Server(httpServer, {
        cors: {
            origin: process.env.CLIENT_URL || 'http://localhost:5173',
            credentials: true,
        }
    });

    io.on('connection', (socket) => {
        console.log(`Socket connected with id: ${socket.id}`);

        registerHandlers(io, socket);
    });
}

module.exports = initializeSokcetServer;