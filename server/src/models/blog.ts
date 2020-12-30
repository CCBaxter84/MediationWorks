const mongoose = require('mongoose');
import { Model, model, Schema, Document } from 'mongoose';

interface IBlog extends Document {
  title: string,
  text: string
};

const blogSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
});

const Blog: Model<IBlog> = model('Blog', blogSchema);

export default Blog;