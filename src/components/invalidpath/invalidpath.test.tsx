import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import invalidpath from './invalidpath';

describe('<invalidpath />', () => {
  test('it should mount', () => {
    render(<invalidpath />);
    
    const invalidpath = screen.getByTestId('invalidpath');

    expect(invalidpath).toBeInTheDocument();
  });
});