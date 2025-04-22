const http = require('node:http');
const object = require('./data.js');
const server = http.createServer((req, res) => {
  console.log('request recived');
  res.end(`
    <h1>${object.title}</h1>
    <h2>${object.subtitle}</h2>
    <p>${object.description}</p>
    `);
});
server.listen(0, () => {
  console.log(
    `server listening on port http://localhost:${server.address().port}`
  );
});
