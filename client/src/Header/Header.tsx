import * as React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
      <article>
        <h3>Mark Loye</h3>
      </article>
      <article id='navlinks'>
        <h4>About</h4>
        <h4>Group Facilitation</h4>
        <h4>Blog</h4>
        <h4>Contact</h4>
      </article>
    </header>
  );
}

export default Header;