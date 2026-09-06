

const rooms = new Map();

// Room
// ├── roomCode
// ├── createdAt
// ├── users[]
// └── messages[]


function createRoom (roomCode) {
    if (rooms.has(roomCode)) {
        throw new Error("Room already exists!");
    }
    rooms.set(roomCode, {
        roomCode,
        createdAt: new Date(),
        users: [],
        messages: [],
    });
    return roomCode;
}


function getRoom (roomCode) {
    const room = rooms.get(roomCode);
    if (room)   return room;
    throw new Error(`The room with Id: ${roomCode} does not exists!`);
}

function hasRoom (roomCode) {
    return rooms.has(roomCode);
}

function getAllRooms () {
    return rooms;
}

function addUser (user, roomCode) {
    let room = rooms.get(roomCode);
    if (!room)  return false;
    room.users.push(user)
    return true
    // rooms.set(roomCode, room);
}

function removeUser (socketId, roomCode) {
    let room = rooms.get(roomCode);
    if (!room)  return;
    room.users = room.users.filter(user => user.socketId !== socketId);
    if (room.users.length === 0)    rooms.delete(roomCode);
    // else
    //     rooms.set(roomCode, room);
}

function addMessage (message, roomCode, username, id) {
    let room = rooms.get(roomCode);
    if (!room)  return;
    const msg = {
        message,
        sentAt: new Date(),
        sentBy: username,
        senderId: id
    }
    room.messages.push(msg);
    // rooms.set(roomCode, room);
}

// export function deleteRoom (roomCode) {
//     const roomToDelete = rooms.get(roomCode);
//     if (roomToDelete.users.length === 0)    rooms.delete(roomCode);
// }

module.exports = { rooms, createRoom, removeUser, addMessage,addUser, getRoom, hasRoom, getAllRooms, }