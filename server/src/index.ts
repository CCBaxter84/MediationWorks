const express = require('express');
import { Application, Request, Response } from 'express';
const mongoose = require('mongoose');
import Blog from './models/blog';
require('dotenv').config();
const app: Application = express();
const PORT = 3000;

app.use(express.static('./client/public'));
app.use(express.json());

const db = process.env.mongoURI;

const connectToDB = async function() {
  try {
    await mongoose.connect(db, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to database');
  } catch(error) {
    console.log(error);
  }
};

connectToDB();

app.get('/blogs', async (req: Request, res: Response) => {
  try {
    const blogs = await Blog.find();
    res.status(200).send(blogs);
  } catch(error: any) {
    res.status(500).json({ msg: error });
  }
});

app.post('/blogs', async (req: Request, res: Response) => {
  try {
    const newBlog = new Blog({
      title: req.body.title,
      text: req.body.text
    });
    const blog = await newBlog.save();
    res.status(201).json({ msg: blog });
  } catch(error: any) {
    res.status(500).json({ msg: error });
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
});



// import * as path from 'path';
/*app.get('/*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'), err => {
    if (err) {
      res.status(500).send(err);
    }
  });
});*/