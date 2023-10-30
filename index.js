const express = require('express');
// const { Client } = require('pg');
const bodyParser = require('body-parser');
const {createProxyMiddleware} = require('http-proxy-middleware');
const app = express();
const port = 3000;

app.use(bodyParser.json());

const routes = {
  '/api': 'http://localhost:3001',
  '/serviceB': 'http://localhost:3002',
};

for (const [path, target] of Object.entries(routes)) {
  app.use(path, createProxyMiddleware({ target }));
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


