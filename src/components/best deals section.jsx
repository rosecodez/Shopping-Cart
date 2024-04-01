import Item from "./item";
import { useState, useEffect } from "react";

export default function BestDealsSection({ setCartTotal }) {
    const itemsArray = [
        'https://fakestoreapi.com/products/9',
        'https://fakestoreapi.com/products/10',
        'https://fakestoreapi.com/products/11',
        'https://fakestoreapi.com/products/12',
        'https://fakestoreapi.com/products/13',
        'https://fakestoreapi.com/products/14'
    ];
    const [cart, setCart] = useState([]);

    // Initialize cart state from local storage on component mount
    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(savedCart);
        
        // Calculate total cart value based on items in local storage
        const total = savedCart.reduce((acc, item) => acc + item.price, 0);
        // Set total cart value
        setCartTotal(total.toFixed(2));
    }, [setCartTotal]);

    // Function to add an item to the cart
    const addToCart = (item) => {
        const existingItemIndex = cartItems.findIndex(cartItem => cartItem.imageUrl === item.imageUrl);
        let updatedCart = [];
        if (existingItemIndex !== -1) {
            // If the item already exists in the cart, increment its count
            updatedCart = [...cartItems];
            updatedCart[existingItemIndex].count++;
        } else {
            // If the item is not in the cart, add it with a count of 1
            updatedCart = [...cartItems, { ...item, count: 1 }];
        }

        // Update cart data in local storage using the updated cart
        localStorage.setItem('cart', JSON.stringify(updatedCart));

        // Recalculate total price using the updated cart
        const totalPrice = updatedCart.reduce((acc, item) => acc + item.price * item.count, 0);
        setTotalPrice(totalPrice.toFixed(2));

        // Finally, update the cart items state
        setCartItems(updatedCart);
    };
    
    return (
        <section id="best-deals-section">
            <h4>Today's best deals</h4>
            
            <div id="items">
                {itemsArray.map((itemUrl, index) => (
                    <Item key={index} itemUrl={itemUrl} addToCart={addToCart} />
                ))}
            </div>
        </section>
    );
}
