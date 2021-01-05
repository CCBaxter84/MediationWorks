import * as React from 'react';
import { useState, useEffect } from 'react';
import './Header.css';
//@ts-ignore
import useWindowSize from '../../useWindowSize.tsx';
//@ts-ignore
import BurgerMenu from '../BurgerMenu/BurgerMenu.tsx';

function Header() {
  const [ width, height ] = useWindowSize();
  const [ showBurgerMenu, setBurgerMenu ] = useState(false);
  const [ isOpen, setIsOpen ] = useState(false);

  useEffect(() => {
    width < 890 ? setBurgerMenu(true) : setBurgerMenu(false);
  }, [width]);

  const open = (e:React.ChangeEvent<HTMLInputElement>) => {
    setIsOpen(true);
  };
  const close = (e:React.ChangeEvent<HTMLInputElement>) => {
    setIsOpen(false);
  };

  return (
    <header>
      <section>
        <article className='navlinks-left'>
          <h3>Mark Loye</h3>
          <h1>Mediation Works 2, LLC</h1>
        </article>
        {showBurgerMenu ?
        <BurgerMenu/> :
        <nav className='navlinks-right'>
          <h4>
            <a href='#about-mark' className='anchor-tags'>About</a>
          </h4>
          <h4>
            <a href='#video' className='anchor-tags'>Video</a>
          </h4>
          <h4>
            <a href='#blog' className='anchor-tags'>Blog</a>
          </h4>
          <h4>
            <a href='#group-facilitation' className='anchor-tags'>Group Facilitation</a>
          </h4>
          <h4>
            <a href='#contact' className='anchor-tags'>Contact</a>
          </h4>
        </nav>}
      </section>
    </header>
  );
}

export default Header;