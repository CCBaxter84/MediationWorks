const express = require('express');
import { Application, Request, Response, Router } from 'express';
import Blog from '../models/blog';

const blogsRouter = Router();

// @route GET /blogs
// @desc Retrieve all blogs from database
blogsRouter.get('/', async (req: Request, res: Response) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json({ msg: blogs });
  } catch(error: any) {
    res.status(500).json({ msg: error });
  }
});

// @route POST /blogs
// @desc add a blog to the database
blogsRouter.post('/', async (req: Request, res: Response) => {
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

export default blogsRouter;