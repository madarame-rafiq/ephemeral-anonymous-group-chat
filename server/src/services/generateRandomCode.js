const { rooms } = require('./roomManager');

function generateRoomCode () {
    let code = '';
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$&%';
    for (let i = 0; i < 7; ++i) {
        let char = characters.charAt(Math.floor(Math.random() * characters.length));
        code += char
    }
    if (rooms.hasRoom(code))    return generateRoomCode();
    return code;
}

module.exports = generateRoomCode;