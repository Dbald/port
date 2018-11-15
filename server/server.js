const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
// Import Models Here
const s = require('./model');

const server = express();
// Begin code for cross-site allowances -------------------------------------
server.use(cors());
server.use(helmet());
server.use(express.json());
server.use(express.static('../client/build/'));

// Back End Routes will User authMiddleware
server.use('/api/send', s);

server.listen(5000, () => console.log("Server Started"));


module.exports = server;