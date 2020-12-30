const mongoose = require('mongoose');
import { Model, model, Schema, Document } from 'mongoose';

interface ILead extends Document {
  firstName: string,
  lastName: string,
  email: string,
  need: string,
  source: string
};

const leadSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  need: {
    type: String,
    required: true
  },
  source: {
    type: String,
    required: true
  }
});

const Lead: Model<ILead> = model('Lead', leadSchema);

export default Lead;