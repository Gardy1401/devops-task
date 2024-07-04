const express = require('express');
const os = require('os');
const app = express();
const port = 8000;
app.get('/hostname', (req, res) => {
  const hostname = os.hostname();
  res.send(Hostname: ${hostname});
});
app.get('/author', (req, res) => {
  const author = process.env.AUTHOR || 'Unknown';
  res.send(Author: ${author});
});
app.get('/id', (req, res) => {
  const uuid = process.env.UUID || 'Unknown';
  res.send(UUID: ${uuid});
});
app.listen(port, () => {
  console.log(Server is listening on port ${port});
});
