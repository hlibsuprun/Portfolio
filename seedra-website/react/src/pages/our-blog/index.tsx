import type { NextPage } from 'next';
import { memo } from 'react';

import { Head } from '@components/Layouts/Head';

const OurBlog: NextPage = memo(() => {
  return (
    <>
      <Head title="Our blog" />
      <main>
        <div>This is the Our Blog Page</div>
      </main>
    </>
  );
});

OurBlog.displayName = 'OurBlog';

export default OurBlog;
