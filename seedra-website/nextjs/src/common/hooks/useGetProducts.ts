import { Product } from '@prisma/client';
import { useEffect, useState } from 'react';

export function useGetProducts() {
  const [products, setProducts] = useState<Product[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState();

  useEffect(() => {
    fetch('/api/products', { method: 'GET' })
      .then((response) => response.json())
      .then(setProducts)
      .catch(setError);
    setLoading(!loading);
  }, []);

  return { products, error, loading };
}
