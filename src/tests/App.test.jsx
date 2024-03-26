import { render, screen } from '@testing-library/react'
import Header from '../components/header'

describe('Header component ', () => {
  it('renders the Header component "Shopping Cart"', () => {
    render(<Header />)
    expect(screen.getByRole("heading").textContent).toMatch("Shopping Cart");
  })
})