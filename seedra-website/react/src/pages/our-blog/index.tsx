import type { NextPage } from 'next';
import { memo } from 'react';

import { Head } from '@/common/components/Layouts/Head/Head';

const OurBlog: NextPage = memo(() => {
  return (
    <>
      <Head title="Our blog" />
      <div>This is the Our Blog Page</div>
    </>
  );
});

OurBlog.displayName = 'OurBlog';

export default OurBlog;