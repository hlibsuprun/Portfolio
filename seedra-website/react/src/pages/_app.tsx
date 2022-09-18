import '@/assets/styles/styles.scss';

import type { AppProps } from 'next/app';

import { Navbar } from '@/common/components/Layouts/Navbar/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
