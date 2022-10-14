import '@styles/global.css';

import type { AppProps } from 'next/app';

import { Navbar } from '@components/Layouts/Navbar';
import { Footer } from '@components/Layouts/Footer';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  main {
    flex: 1;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Wrapper>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Wrapper>
  );
}

export default MyApp;
