import '@/assets/styles/styles.scss';

import type { AppProps } from 'next/app';

import { Navbar } from '@components/Layouts/Navbar/Navbar';
import { Footer } from '@components/Layouts/Footer/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
