import express  from 'express';
import mongoose from 'mongoose';
import routes from './routes';

const app = express();

mongoose.connect('mongodb://localhost/snackapi');

app.use(express.json());
app.use(routes);

app.listen(3000, () => {
  console.log('🔥 Server started at http://localhost:3000');
});
