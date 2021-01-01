const express = require('express');
import { Application } from 'express';
const mongoose = require('mongoose');
import blogsRouter from './routes/blogs';
import leadsRouter from './routes/leads';
require('dotenv').config();
const app: Application = express();
const PORT = process.env.PORT || 8080;

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