import { render, screen } from '@testing-library/react';

describe('<departments />', () => {
  test('it should mount', () => {

    const departments = screen.getByTestId('departments');

    expect(departments).toBeInTheDocument();
  });
});