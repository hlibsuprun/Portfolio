import type { NextPage } from 'next';
import { memo } from 'react';

import { Head } from '@components/Layouts/Head';

import { Header } from './home/components/Layouts/Header';

const Home: NextPage = memo(() => {
  return (
    <>
      <Head title="Home"></Head>
      <main>
        <Header></Header>
      </main>
    </>
  );
});

Home.displayName = 'Home';

export default Home;
