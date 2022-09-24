import { NextApiRequest, NextApiResponse } from 'next';

import { createNewCategory, getAllCategories } from './api/CategoriesAPI';

export default async function handle(
  request: NextApiRequest,
  response: NextApiResponse
) {
  switch (request.method) {
    case 'POST':
      await createNewCategory(request, response);
      break;
    case 'GET':
      await getAllCategories(response);
      break;
  }
}
