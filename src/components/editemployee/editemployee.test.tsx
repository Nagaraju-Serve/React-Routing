import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import editemployee from './editemployee';

describe('<editemployee />', () => {
  test('it should mount', () => {
    render(<editemployee />);
    
    const editemployee = screen.getByTestId('editemployee');

    expect(editemployee).toBeInTheDocument();
  });
});