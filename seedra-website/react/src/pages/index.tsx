import type { NextPage } from 'next';
import { memo } from 'react';

import { Head } from '@components/Layouts/Head';

const Home: NextPage = memo(() => {
  return (
    <>
      <Head title="Home"></Head>
      <main>
        <div>This is the Home Page</div>
      </main>
    </>
  );
});

Home.displayName = 'Home';

export default Home;
