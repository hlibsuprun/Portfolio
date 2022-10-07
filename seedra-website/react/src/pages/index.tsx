import type { NextPage } from 'next';
import { memo } from 'react';

import { Head } from '@components/Layouts/Head';

const Home: NextPage = memo(() => {
  return (
    <>
      <Head title="Home" />
      <div>This is the Home Page</div>
    </>
  );
});

Home.displayName = 'Home';

export default Home;
