const express = require('express');
// const { Client } = require('pg');
const bodyParser = require('body-parser');

const app = express();
const port = 3002;

app.use(bodyParser.json());

app.get('/serviceB', (req, res) => {
  res.json({ message: 'Hello from Serve2'});
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
} );