const express = require('express');
import { Application, Request, Response } from 'express';
const mongoose = require('mongoose');
import Blog from './models/blog';
import Lead from './models/lead';
import blogsRouter from './routes/blogs';
import leadsRouter from './routes/leads';
require('dotenv').config();
const app: Application = express();
const PORT = 3000;

app.use(express.static('./client/public'));
app.use(express.json());
app.use('/blogs', blogsRouter);
app.use('/leads', leadsRouter);

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

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
});