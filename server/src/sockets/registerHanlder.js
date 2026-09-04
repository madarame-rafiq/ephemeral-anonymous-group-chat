const registerConnectionHanlder = require('./handlers/connectionHandler');

function registerHandlers (io, socket) {
    registerConnectionHanlder(io, socket);
}

module.exports = registerHandlers;