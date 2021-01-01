import * as React from 'react';
import { useState, useEffect } from 'react';
import './BlogArticles.css';
//@ts-ignore
import Blog from '../Blog/Blog.tsx';
import axios from 'axios';

interface Props {
  openModal: (title: string, text: string) => void
};

interface Blog {
  id: number,
  title: string,
  text: string
};

type Helper = () => void;

function BlogArticles({ openModal }: Props) {
  const [ blogs, setBlogs ] = useState([]);
  const [ count, setCount ] = useState(6);

  useEffect(() => {
    axios.get('/blogs')
      .then(res => setBlogs(res.data.msg))
      .catch(err => console.log(err))
  }, []);

  let blogsToRender = blogs.slice(0, count);

  const loadMore:Helper = () => {
    setCount(prev => prev + 3);
  };

  if (blogs.length) {
    return (
      <section id='blog' className='blogs-background'>
        <p>Mark's Blog</p>
        <section className='blogs-container'>
          {blogsToRender.map((blog:Blog) => <Blog key={blog.id} title={blog.title} text={blog.text} openModal={openModal}/>)}
        </section>
        {blogsToRender.length < blogs.length &&
        <article id='load-more' onClick={loadMore}>
          <p>Load More</p>
        </article>}
      </section>
    );
  } else {
    return (
      <h3>Loading Blogs...</h3>
    );
  }
}

export default BlogArticles;