const socketController = socket => {
    console.log("Client connected", socket.id);
    
    // client disconnected
    socket.on("disconnect", () => {
        console.log("Client disconnected", socket.id);
    });
    
    // message from client
    socket.on("send-message", (message, callback) => {
        socket.broadcast.emit("send-message", message);
    });
};

module.exports = {
    socketController
};