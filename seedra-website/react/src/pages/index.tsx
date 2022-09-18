import type { NextPage } from 'next';
import { memo } from 'react';

const Home: NextPage = memo(() => {
  return <div>This is the Home Page</div>;
});

Home.displayName = 'Home';

export default Home;
