'use client';

import Nav from './components/Sections/Nav';
import Head from './components/Sections/Head';
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
      <Loader />
      <Nav />
      <Head />
      <StyledContent>
        <Social />
        <Email />
      </StyledContent>
    </>
  );
}
