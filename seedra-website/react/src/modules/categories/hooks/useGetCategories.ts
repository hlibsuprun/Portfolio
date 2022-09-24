import { Category } from '@prisma/client';
import { useEffect, useState } from 'react';

export function useGetCategories() {
  const [categories, setCategories] = useState<Category[]>();

  useEffect(() => {
    fetch('/api/categories', { method: 'GET' })
      .then((response) => response.json())
      .then(setCategories);
  }, []);

  return categories;
}
