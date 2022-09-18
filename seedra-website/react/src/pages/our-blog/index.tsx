import type { NextPage } from 'next';
import { memo } from 'react';

const OurBlog: NextPage = memo(() => {
  return <div>This is the Our Blog Page</div>;
});

OurBlog.displayName = 'OurBlog';

export default OurBlog;
