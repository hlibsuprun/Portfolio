import '@styles/global.css';

import type { AppProps } from 'next/app';
import { GetServerSideProps } from 'next';

import { Navbar } from '@components/Layouts/Navbar';
// import { Footer } from '@components/Layouts/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      {/* <Footer /> */}
    </>
  );
}

export default MyApp;
