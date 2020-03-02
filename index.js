const jsonServer = require('json-server');
const os = require('os');
const fs = require('fs');
const db = require('./db.js');

const server = jsonServer.create();

fs.writeFileSync('/tmp/db.json', JSON.stringify(db()));

const router = jsonServer.router('/tmp/db.json');
const middlwares = jsonServer.defaults();
const hostname = os
  .hostname()
  .toLowerCase();
const PORT = process.env.PORT || 3000;

server.use(middlwares);
server.use(router);
server.listen(PORT, () => {
  console.log(`JSON Server is Up and Running:\n=> http://${hostname}:${PORT}`);
});
