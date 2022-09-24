import type { NextPage } from 'next';
import { memo } from 'react';

import { Head } from '@/common/components/Layouts/Head/Head';

const AllProducts: NextPage = memo(() => {
  return (
    <>
      <Head title="All products" />
      <div>This is the All products Page</div>
    </>
  );
});

AllProducts.displayName = 'AllProducts';

export default AllProducts;
