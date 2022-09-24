import { Category } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

import prisma from '@/lib/prisma';

export const getAllCategories = async (response: NextApiResponse) => {
  const categories: Category[] = await prisma.category.findMany({
    include: { subcategories: true }
  });
  response.json(categories);
};

export const createNewCategory = async (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  const result = await prisma.category.create({
    data: request.body
  });
  response.json(result);
};
