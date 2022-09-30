import { Category } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

import prisma from '@/lib/prisma';

export default async function handle(
  request: NextApiRequest,
  response: NextApiResponse
) {
  switch (request.method) {
    case 'GET':
      const categories: Category[] = await prisma.category.findMany({
        include: { subcategories: true }
      });
      response.json(categories);
      break;
  }
}
