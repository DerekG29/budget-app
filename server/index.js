import express from 'express';
import cors from 'cors';
import data from '../src/data/data.js';

const server = express();
const port = 3000;

server.use(cors());

server.get('/', (req, res) => {
  res.json(data);
})

server.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
})
