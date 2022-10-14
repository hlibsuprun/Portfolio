import type { NextPage } from 'next';
import { memo } from 'react';

import { Head } from '@components/Layouts/Head';

const AboutSeedra: NextPage = memo(() => {
  return (
    <>
      <Head title="About Seedra" />
      <main>
        <div>This is the About Seedra Page</div>
      </main>
    </>
  );
});

AboutSeedra.displayName = 'AboutSeedra';

export default AboutSeedra;
