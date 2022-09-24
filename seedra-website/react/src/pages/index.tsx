import type { NextPage } from 'next';
import { memo } from 'react';

import { Head } from '@/common/components/Layouts/Head/Head';

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
