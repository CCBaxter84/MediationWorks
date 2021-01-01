import * as React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
      <section>
        <article className='navlinks'>
          <h3>Mark Loye</h3>
          <h1>Mediation Works 2, LLC</h1>
        </article>
        <article className='navlinks'>
          <h4><a href='#about-mark' className='anchor-tags'>About</a></h4>
          <h4><a href='#video' className='anchor-tags'>Video</a></h4>
          <h4><a href='#blog' className='anchor-tags'>Blog</a></h4>
          <h4><a href='#group-facilitation' className='anchor-tags'>Group Facilitation</a></h4>
          <h4><a href='#contact' className='anchor-tags'>Contact</a></h4>
        </article>
      </section>
    </header>
  );
}

export default Header;