import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; 
import Header from '../components/header';
import { describe, it, expect } from 'vitest';

describe('Header component', () => {
  it('renders the Header component "Shopping Cart and other elements"', () => {
    render(
      // wrap header component in a memory router from react router because of the use of link
      // https://stackoverflow.com/questions/75728532/error-message-uncaught-typeerror-cannot-destructure-property-basename-of-re
      <MemoryRouter> 
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading').textContent).toMatch("Shopping Cart");
    screen.getByText("Items:");
    screen.getByText("All our items");
    screen.getByText("Today's deals");
    screen.getByText("Today's deals");
    screen.getByPlaceholderText(('Search'));
  });
});
