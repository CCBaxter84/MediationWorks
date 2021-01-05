import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState, MouseEvent } from 'react';
import './BurgerMenu.css';

type Helper = (event: MouseEvent<SVGElement>) => void;

function BurgerMenu() {
  const [ showMenu, setShowMenu ] = useState(false);

  const handleClick:Helper = (event: MouseEvent<SVGElement>) => setShowMenu(prev => !prev);

  let menu = (
    <article className='menu'>
      <a href='#about-mark' className='anchor-tags'>About</a>
      <a href='#video' className='anchor-tags'>Video</a>
      <a href='#blog' className='anchor-tags'>Blog</a>
      <a href='#group-facilitation' className='anchor-tags'>Group Facilitation</a>
      <a href='#contact' className='anchor-tags'>Contact</a>
    </article>
  );

  return (
    <nav className='bm-container'>
      <span className='burger-menu'>
        <FontAwesomeIcon
          className='fa-lg'
          icon={faBars}
          onClick={handleClick}
        />
      </span>
      {showMenu && menu}
    </nav>
  );
};

export default BurgerMenu;