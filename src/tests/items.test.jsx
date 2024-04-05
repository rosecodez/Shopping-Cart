import { vi, describe, it, expect } from 'vitest';
import Item from "../components/item";

const mockItem = {
    title: 'item',
    price: '100',
    imageURL: "https://example.com/image.jpg",
};

const fn = vi.fn();
fn.fetch = () => Promise.resolve({
    json: () => Promise.resolve(mockItem),
});

describe('fetch request item and return result', () => {
    it('should return the mock item', async () => {
        const response = await fn.fetch();

        const result = await response.json();

        expect(result).toEqual(mockItem);
    });
});
