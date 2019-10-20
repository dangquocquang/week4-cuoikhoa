import React from 'react';
import renderer from 'react-test-renderer';
import Product from './Product.jsx';

const mockProduct = {
  id: '0002',
  name: 'Minimal Deco Furniture',
  image: './assets/pro2.jpg',
  image2: './assets/pro3.jpg',
  category: 'furniture',
  discountPrice: '119.00',
  price: '230.00',
};

test('Product component', () => {
  const component = renderer.create(<Product {...mockProduct} />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
