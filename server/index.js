const express = require("express");
const http = require("http");
const cors = require("cors");
const { initializeSocket } = require("./controllers/socketController");

const app = express();
const server = http.createServer(app);

app.use(cors());

initializeSocket(server);

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
