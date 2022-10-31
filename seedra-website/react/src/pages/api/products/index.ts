import { Product } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

import prisma from '@/lib/prisma';

export default async function handle(
  request: NextApiRequest,
  response: NextApiResponse
) {
  switch (request.method) {
    case 'GET':
      const products: Product[] = await prisma.product.findMany({});
      response.json(products);
      break;
  }
}
