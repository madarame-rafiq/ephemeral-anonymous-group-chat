const registerConnectionHanlder = require('./handlers/registerConnectionHanlder');
const registerRoomHandler = require('./handlers/registerRoomHandler');

function registerHandlers (io, socket) {
    //connection relted events.
    registerConnectionHanlder(io, socket);

    //room related events.
    registerRoomHandler(io, socket);
}

module.exports = registerHandlers;