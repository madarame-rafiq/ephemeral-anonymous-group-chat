

const rooms = new Map();

// Room
// ├── roomCode
// ├── createdAt
// ├── users[]
// └── messages[]


export function createRoom (roomCode, createdByUser) {
    if (rooms.has(roomCode)) {
        throw new Error("Room already exists!");
    }
    rooms.set(roomCode, {
        roomCode,
        createdAt: new Date(),
        users: [createdByUser],
        messages: [],
    });
}


export function getRoom (roomCode) {
    const room = rooms.get(roomCode);
    if (room)   return room;
    throw new Error(`The room with Id: ${roomCode} does not exists!`);
}

export function hasRoom (roomCode) {
    return rooms.has(roomCode);
}

export function getAllRooms () {
    return rooms;
}

export function addUser (user, roomCode) {
    let room = rooms.get(roomCode);
    if (!room)  return;
    room.users.push(user)
    // rooms.set(roomCode, room);
}

export function removeUser (socketId, roomCode) {
    let room = rooms.get(roomCode);
    if (!room)  return;
    room.users = room.users.filter(user => user.socketId !== socketId);
    if (room.users.length === 0)    rooms.delete(roomCode);
    // else
    //     rooms.set(roomCode, room);
}

export function addMessage (message, roomCode) {
    let room = rooms.get(roomCode);
    if (!room)  return;
    room.messages.push(message)
    // rooms.set(roomCode, room);
}

// export function deleteRoom (roomCode) {
//     const roomToDelete = rooms.get(roomCode);
//     if (roomToDelete.users.length === 0)    rooms.delete(roomCode);
// }