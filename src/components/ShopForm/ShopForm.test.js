import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ShopForm from './ShopForm';

describe('<ShopForm />', () => {
  test('it should mount', () => {
    render(<ShopForm />);
    
    const shopForm = screen.getByTestId('ShopForm');

    expect(shopForm).toBeInTheDocument();
  });
});