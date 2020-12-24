import * as React from 'react';
import './Blog.css';

type Props = {
  key: number,
  title: string,
  text: string
}

const Blog: React.FC<Props> = ({ title, text }) => (
  <article className='blog'>
    <p id='blog-title'>{title}</p>
    <p id='blog-text'>{text.slice(0, 30)}...</p>
  </article>
);

export default Blog;