import express from 'express';
import path from 'path';

const app = express();
const PORT = 3000;

app.use(express.static('./client/public'));
app.use(express.json());

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'), err => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
});