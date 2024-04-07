import AllItemsSection from "../components/all items section";
import BestDealsSection from "../components/best deals section";
import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from "vitest";
import { MemoryRouter } from "react-router-dom";

const setCartTotal = vi.fn();

// both tests are trying to render components that use the same state variables at the same time,
// so using beforeEach ensures that each test work with fresh rendered component
describe('AllItemsSection section', () => {
  beforeEach(() => {
    render(
      <MemoryRouter> 
        <AllItemsSection setCartTotal={setCartTotal} />
      </MemoryRouter>
    );
  });

  it('should render a header "All our products"', () => {
    const header = screen.getByRole('heading', { name: "All our products" });
    expect(header).toBeInTheDocument();
  });

  it("every item on section should have a title, a button 'Add to cart', and an image", async () => {
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
});

describe('BestDealsSection section', () => {
  beforeEach(() => {
    render(
      <MemoryRouter> 
        <BestDealsSection setCartTotal={setCartTotal} />
      </MemoryRouter>
    );
  });

  it('should render a header "Today\'s best deals"', () => {
    const header = screen.getByRole('heading', { name: "Today's best deals" });
    expect(header).toBeInTheDocument();
  });
  
  it("every item on section should have a title, a button 'Add to cart', and an image", async () => {
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
});

