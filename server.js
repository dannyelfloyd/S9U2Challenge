const http = require('node:http');
const object = require('./data.js');
const server = http.createServer((req, res) => {
  res.end(`
    <h1>${object.title}</h1>
    <h2>${object.subtitle}</h2>
    <p>${object.description}</p>
    `);
});
const PORT = 3000;
server.listen(PORT, () => {
  console.log(
    `server listening on port http://localhost:${PORT}`
  );
});
//Terminal: node --watch server.js