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

    // Function to add item to cart
    const addToCart = (item) => {
        // Update cart state
        const updatedCart = [...cart, item];
        setCart(updatedCart);
        
        // Calculate total cart value
        const newTotal = updatedCart.reduce((acc, item) => acc + item.price, 0);
        setCartTotal(newTotal.toFixed(2)); // Update total cart value
        
        // Store updated cart in local storage
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        // Also update total in local storage
        localStorage.setItem('cartTotal', newTotal.toFixed(2));
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
