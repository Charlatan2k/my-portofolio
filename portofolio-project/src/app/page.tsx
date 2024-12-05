// src/app/page.tsx

'use client';

import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n'; // Make sure the path is correct
import Nav from './components/Sections/Nav';
import Head from './components/Sections/Head';
import About from './components/Sections/About';
import Skills from './components/Sections/Skills';
import Projects from './components/Sections/Projects';
import Contact from './components/Sections/Contact';
import Social from './components/UI/socialElement';
import Loader from './components/UI/Loader';
import Email from './components/UI/EmailElement';
import styled from 'styled-components';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export default function Home() {
  useEffect(() => {
    // Ensures i18n is properly initialized
    i18n.init();
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <StyledContent>
        <Loader />
        <Nav />
        <Head />
        <Social />
        <Email />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </StyledContent>
    </I18nextProvider>
  );
}
