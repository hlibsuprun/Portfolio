import { Category } from '@prisma/client';
import { useEffect, useState } from 'react';

export function useGetCategories() {
  const [categories, setCategories] = useState<Category[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState();

  useEffect(() => {
    fetch('/api/categories', { method: 'GET' })
      .then((response) => response.json())
      .then(setCategories)
      .catch(setError);
    setLoading(!loading);
  }, []);

  return { categories, error, loading };
}
