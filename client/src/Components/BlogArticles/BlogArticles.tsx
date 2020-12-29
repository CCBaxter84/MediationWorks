import * as React from 'react';
import './BlogArticles.css';
//@ts-ignore
import Blog from '../Blog/Blog.tsx';
//@ts-ignore
import blogs from './blogs.ts';

type Props = {
  openModal: (title: string, text: string) => void
};

const BlogArticles: React.FC<Props> = ({ openModal }) => {
  console.log(blogs);
  if (blogs.length) {
    return (
      <section id='blog' className='blogs-background'>
        <p>Mark's Blog</p>
        <section className='blogs-container'>
          {blogs.map((blog:any) => <Blog key={blog.id} title={blog.title} text={blog.text} openModal={openModal}/>)}
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