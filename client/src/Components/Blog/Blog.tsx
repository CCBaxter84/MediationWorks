import * as React from 'react';
import './Blog.css';

type Props = {
  key: number,
  title: string,
  text: string,
  openModal: (title: string, text: string) => void
};

function Blog({ title, text, openModal }: Props) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    openModal(title, text);
  };

  return (
    <article className='blog' onClick={handleClick}>
      <p id='blog-title'>{title}</p>
      <p id='blog-text'>{text.slice(0, 30)}...</p>
    </article>
  );
}

export default Blog;