import * as React from 'react';
import './BlogArticles.css';
//@ts-ignore
import Blog from '../Blog/Blog.tsx';
//@ts-ignore
import blogs from './blogs.ts';

const BlogArticles: React.FC = () => {
  console.log(blogs);
  if (blogs.length) {
    return (
      <section className='blogs-background'>
        <section id='blog' className='blogs-container'>
          {blogs.map((blog:any) => <Blog key={blog.id} title={blog.title} text={blog.text}/>)}
        </section>
      </section>
    );
  } else {
    return (
      <h3>Loading Blogs...</h3>
    )
  }
}

export default BlogArticles;