const { generateRoomCode } = require("../../services/generateRandomCode");
const { createRoom, addUser, getRoom, addMessage, removeUser } = require("../../services/roomManager");


function registerRoomHandler (io, socket) {

    //creating room.
    socket.on('create-room', (data) => {
        const randomlyGeneratedRoomCode = generateRoomCode();
        createRoom(randomlyGeneratedRoomCode);

        const user = {
            socketId: socket.id,
            username: data.username,
            joinedAt: new Date(),
        }

        const joinedRoom = addUser(user, randomlyGeneratedRoomCode);

        if (!joinedRoom)   {
            socket.emit('room-error', {
                joinedRoom,
                message: `room with room code ${roomCode} does not exists`,
            });
            return;
        }

        socket.join(randomlyGeneratedRoomCode);

        const room = getRoom(randomlyGeneratedRoomCode);
        socket.emit('room-created', {
            room,
            user,
        });
    });

    //joining room.
    socket.on('join-room', (data) => {
        let roomCode = data.roomCode
        const user = {
            socketId: socket.id,
            username: data.username,
            joinedAt: new Date(),
        }
        const joinedRoom = addUser(user, roomCode);
        if (!joinedRoom)   {
            socket.emit('room-error', {
                joinedRoom,
                message: `room with room code ${roomCode} does not exists or something else went wrong.`,
            });
            return;
        }
        socket.join(roomCode);
        const room = getRoom(roomCode);
        socket.emit('room-joined', {
            joinedRoom,
            message: `room joined successfully`,
            room,
        })
        socket.to(roomCode).emit('user-joined', { user, room });
    });

   socket.on('message-sent', (data) => {
        const msg = data.message;
        const roomCode = data.roomCode
        addMessage(msg, roomCode, data.username, socket.id);
        
        const room = getRoom(roomCode);
        //send the message to everyone in the room.
        io.to(roomCode).emit('message-recieved', room);
   });

   socket.on('leave-message', () => {
        removeUser(socket.id);

        socket.emit('leaved-room', {
            message:"You left the room."
        })
   });
}

module.exports = registerRoomHandler;