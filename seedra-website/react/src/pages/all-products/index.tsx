import type { NextPage } from 'next';
import { memo } from 'react';

const AllProducts: NextPage = memo(() => {
  return <div>This is the All Products Page</div>;
});

AllProducts.displayName = 'AllProducts';

export default AllProducts;
