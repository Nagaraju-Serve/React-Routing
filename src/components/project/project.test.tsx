import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import project from './project';

describe('<project />', () => {
  test('it should mount', () => {
    render(<project />);
    
    const project = screen.getByTestId('project');

    expect(project).toBeInTheDocument();
  });
});