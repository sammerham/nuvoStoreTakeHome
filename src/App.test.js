import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react';


import App from './App';


// smoke test
test('renders without crashing', () => {
  render(<App />);
});



// snapShot
test("matches snapshot", function () {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});


test("checking if title and intro show on main app", function () {
  render(<App />);
  expect(screen.getByText('Nuvo Store')).toBeInTheDocument()
  expect(screen.getByText('perspiciatis quisquam', { exact: false })).toBeVisible()
});

test("checking details box show when clicking product title", async function () {
  render(<App />);
  const title = await screen.findByText('Fjallraven', { exact: false })
  fireEvent.click(title)
  await screen.findByText('$', { exact: false })
  expect(screen.getByText('$', { exact: false })).toBeInTheDocument()
  const btn = await screen.findByText('Add to Cart', { exact: false })
  fireEvent.click(btn)
  expect(screen.queryByText('$', { exact: false })).not.toBeInTheDocument()
});

