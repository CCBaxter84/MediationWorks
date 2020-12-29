import * as React from 'react';
import './BlogModal.css';

type Props = {
  showModal: boolean,
  title: string,
  text: string,
  closeModal: () => void
}

function BlogModal({ showModal, title, text, closeModal }: Props) {
  if (!showModal) {
    return <></>
  }
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    closeModal();
  };

  const paragraphs = text.split('\n');

  return (
    <section id='modal-background' onClick={handleClick}>
      <section id='modal-content'>
        <p>{title}</p>
        <article>
          {paragraphs.map(para => <p>{para}</p>)}
        </article>
      </section>
    </section>
  );
}

export default BlogModal;