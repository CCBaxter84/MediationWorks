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

function App() {
  return (
    <>
      <Header/>
      <TagLine/>
      <AboutMark/>
      <BlogArticles />
      <GroupFacilitation />
      <ContactForm/>
    </>
  );
}

export default App;
