import React from 'react'
import { screen, render } from '@testing-library/react';


import Inroduction from './Intodcudion';


// smoke test
test('renders without crashing', () => {
  render(<Inroduction />);
});



// snapShot
test("matches snapshot", function () {
  const { container } = render(<Inroduction />);
  expect(container).toMatchSnapshot();
});


test("checking if title and intro shows", function () {
  render(<Inroduction />);
  expect(screen.getByText('Nuvo Store')).toBeInTheDocument()
  expect(screen.getByText('perspiciatis quisquam', { exact: false })).toBeVisible()
});