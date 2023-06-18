import express  from 'express';

const app = express();

app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hi, Node.js')
});

app.listen(3000, () => {
  console.log('🔥 Server started at http://localhost:3000');
})
