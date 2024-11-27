'use client';

import Nav from './components/Sections/Nav';
import Head from './components/Sections/Head';
import About from './components/Sections/About';
import Skills from './components/Sections/Skills';
import Projects from './components/Sections/Projects';
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
  return (
    <>
      <StyledContent>
        <Loader />
        <Nav />
        <Head />
        <Social />
        <Email />
        <About />
        <Skills />
        <Projects />
      </StyledContent>
    </>
  );
}
