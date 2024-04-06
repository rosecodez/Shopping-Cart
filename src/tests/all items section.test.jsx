import AllItemsSection from "../components/all items section";
import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";

const setCartTotal = vi.fn();

render(
  <MemoryRouter> 
    <AllItemsSection setCartTotal={setCartTotal} />
  </MemoryRouter>
);

describe('AllItemsSection header', () => {
  it('should render a header "All our products"', () => {
    const header = screen.getByRole('heading', { name: "All our products" });
    expect(header).toBeInTheDocument();
  });
});

describe('every item on section', () => {
  it("should have a title, a button 'Add to cart', and an image", async () => {
    await waitFor(() => {
      const items = document.querySelectorAll('.item');
      items.forEach(container => {
        const itemName = container.querySelector('h5');
        const addButton = container.querySelector('button');
        const itemImage = container.querySelector('img');
  
        expect(itemName).toBeTruthy();
        expect(addButton).toBeTruthy();
        expect(itemImage).toBeTruthy();
      })
    })
  })
})
