const express = require('express');
// const { Client } = require('pg');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(bodyParser.json());

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from Server1'});
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
} );