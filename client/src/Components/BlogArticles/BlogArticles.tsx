import * as React from 'react';
import { useState, useEffect } from 'react';
import './BlogArticles.css';
//@ts-ignore
import Blog from '../Blog/Blog.tsx';
import axios from 'axios';

type Props = {
  openModal: (title: string, text: string) => void
};

type Blog = {
  id: number,
  title: string,
  text: string
};

function BlogArticles({ openModal }: Props) {
  const [ blogs, setBlogs ] = useState([]);

  useEffect(() => {
    axios.get('/blogs')
      .then(res => setBlogs(res.data.msg))
      .catch(err => console.log(err))
  }, []);

  if (blogs.length) {
    return (
      <section id='blog' className='blogs-background'>
        <p>Mark's Blog</p>
        <section className='blogs-container'>
          {blogs.map((blog:Blog) => <Blog key={blog.id} title={blog.title} text={blog.text} openModal={openModal}/>)}
        </section>
      </section>
    );
  } else {
    return (
      <h3>Loading Blogs...</h3>
    );
  }
}

export default BlogArticles;