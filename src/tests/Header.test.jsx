import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; 
import Header from '../components/header';
import { describe, it, expect } from 'vitest';
import userEvent from '@testing-library/user-event'


// the header is the parent component
// contains buttons for the other sections rendering

render(
    <MemoryRouter> 
      <Header />
    </MemoryRouter>
  );
describe('Header component', () => {
  
  it('should render a header "Shopping Cart" as a Link, checks for href attribute, links to "/"', () => {
    const headerAsLink = screen.getByRole('link', {name: "Shopping Cart"})
    expect(headerAsLink).toBeInTheDocument();
    expect(headerAsLink).toHaveAttribute('href', "/");
  });
});

describe('Header section buttons', () => {
  const buttonsClassName = "all-items-buttons";

  it('should display the button "All our items" with the className of ' + buttonsClassName + " and link to 'shop-page'"), () => {
    const button1 = screen.getByRole('button', {name: button1})
    expect(button1).toBeInTheDocument();
    expect(button1).toHaveClass(buttonsClassName)
    expect(button1).toHaveAttribute('href', "/page/shop-page");
  }
  it(`should display the button "Today's deals" with the className of ` + buttonsClassName + " and link to 'homepage'"),() => {
    const button2 = screen.getByRole('button', {name: "Today's deals"})
    expect(button2).toBeInTheDocument();
    expect(button2).toHaveClass(buttonsClassName);
    expect(button2).toHaveAttribute('href', "/page/homepage");
  }

})
