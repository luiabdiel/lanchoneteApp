import express  from 'express';
import mongoose from 'mongoose';

const app = express();

mongoose.connect('mongodb://localhost/snackapi');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hi, Node.js');
});

app.listen(3000, () => {
  console.log('🔥 Server started at http://localhost:3000');
});
