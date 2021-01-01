import * as React from 'react';
import { useState } from 'react';
import './App.css';
//@ts-ignore
import Header from './Components/Header/Header.tsx';
//@ts-ignore
import AboutMark from './Components/AboutMark/AboutMark.tsx'; //@ts-ignore
import TagLine from './Components/TagLine/TagLine.tsx'
//@ts-ignore
import BlogArticles from './Components/BlogArticles/BlogArticles.tsx'
//@ts-ignore
import GroupFacilitation from './Components/GroupFacilitation/GroupFacilitation.tsx'
//@ts-ignore
import ContactForm from './Components/ContactForm/ContactForm.tsx'
//@ts-ignore
import BlogModal from './Components/BlogModal/BlogModal.tsx'
//@ts-ignore
import Video from './Components/Video/Video.tsx'

type Helper = () => void;
type HelperWArgs = (title: string, text: string) => void;

function App() {
  const [ showModal, setShowModal ] = useState(false);
  const [ title, setTitle ] = useState('');
  const [ text, setText ] = useState('');

  const openModal:HelperWArgs = (title, text) => {
    setShowModal(true);
    setTitle(title);
    setText(text);
  };

  const closeModal:Helper = () => {
    setShowModal(false);
  }

  return (
    <>
      <Header/>
      <TagLine/>
      <AboutMark/>
      <Video/>
      <BlogArticles openModal={openModal}/>
      <GroupFacilitation />
      <ContactForm/>
      <BlogModal showModal={showModal} title={title} text={text} closeModal={closeModal}/>
    </>
  );
}

export default App;
