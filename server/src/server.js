const dotenv = require("dotenv");
dotenv.config();

const http = require("http");
const initializeSokcetServer = require('./sockets/index');

const app = require("./app");

const PORT = process.env.PORT || 3000;

// Create HTTP Server
const httpServer = http.createServer(app);

initializeSokcetServer(httpServer);

// Start Server
httpServer.listen(PORT, () => {
  console.log(` Server is running on http://localhost:${PORT}`);
});