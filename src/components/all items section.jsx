import Item from "./item";
import { useState, useEffect } from "react";

export default function AllItemsSection({ setCartTotal }) {
    const itemsArray = [
        'https://fakestoreapi.com/products/14',
        'https://fakestoreapi.com/products/10',
        'https://fakestoreapi.com/products/1',
        'https://fakestoreapi.com/products/13',
        'https://fakestoreapi.com/products/2',
        'https://fakestoreapi.com/products/12',
        'https://fakestoreapi.com/products/3',
        'https://fakestoreapi.com/products/4',
        'https://fakestoreapi.com/products/11',
        'https://fakestoreapi.com/products/5',
        'https://fakestoreapi.com/products/9',
        'https://fakestoreapi.com/products/6', 
    ];
    const [cart, setCart] = useState([]);
    
    const addToCart = (item) => {
        setCart(prevCart => [...prevCart, item]);
    };
    
    useEffect(() => {
        const newTotal = cart.reduce((total, cartItem) => total + cartItem.price, 0);
        setCartTotal(newTotal.toFixed(0));
    }, [cart, setCartTotal]);

    

    return (
        <section id="all-items-section">
            <h4>All our products</h4>
            <div id="items">
                {itemsArray.map((itemUrl, index) => (
                    <Item key={index} itemUrl={itemUrl} addToCart={addToCart} />
                ))}
            </div>
        </section>
    );
}
