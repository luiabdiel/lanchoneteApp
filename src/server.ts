import http from 'node:http';
import express  from 'express';
import mongoose from 'mongoose';
import routes from './routes';

const app = express();
const server = http.createServer(app);

mongoose.connect('mongodb://localhost/snackapi')
  .then(() => {
    const port = 3001;

    app.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', '*');
      res.setHeader('Access-Control-Allow-Headers', '*');

      next();
    });
    app.use(express.json());
    app.use(routes);

    server.listen(port, () => {
      console.log(`🔥 Server started at http://localhost:${port}`);
    });
  })
  .catch(() => console.log('Erro ao conectar no mongodb'));
