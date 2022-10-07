import type { NextPage } from 'next';
import { memo } from 'react';

import { Head } from '@components/Layouts/Head';

const AboutSeedra: NextPage = memo(() => {
  return (
    <>
      <Head title="About" />
      <div>This is the About Seedra Page</div>
    </>
  );
});

AboutSeedra.displayName = 'AboutSeedra';

export default AboutSeedra;
