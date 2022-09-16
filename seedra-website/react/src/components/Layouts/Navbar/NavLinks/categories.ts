export interface Category {
  name: string;
  products?: string[];
}

export const categories: Category[] = [
  { name: 'All vegetables' },
  {
    name: 'Bundles',
    products: [
      'herb',
      'squash',
      'spinach',
      'onion',
      'lettuce',
      'cucumber',
      'cabbage',
      'beet',
      'bean',
      'carrot',
      'bell pepper',
      'sweet and hot pepper',
      'radish'
    ]
  },
  {
    name: 'Herbs',
    products: [
      'bundles',
      'lavender',
      'cilantro',
      'parsley',
      'basil',
      'dill',
      'catnip'
    ]
  }
];
