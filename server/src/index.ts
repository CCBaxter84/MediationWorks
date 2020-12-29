import express = require('express');
import { Application, Request, Response } from 'express';
import * as path from 'path';
const app: Application = express();
const PORT = 3000;

app.use(express.static('./client/public'));
app.use(express.json());

/*app.get('/*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'), err => {
    if (err) {
      res.status(500).send(err);
    }
  });
});*/

app.get('/blogs', async (req: Request, res: Response) => {
  try {
    res.status(200).json({ msg: 'Hold on to your butts...' });
  } catch(error: any) {
    res.status(500).json({ msg: error });
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
});