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

    const addToCart = (item) => {
            setCart(prevCart => [...prevCart, item]);
        };

    useEffect(() => {
        const newTotal = cart.reduce((total, cartItem) => total + cartItem.price, 0);
        setCartTotal(newTotal.toFixed(1));
    }, [cart, setCartTotal]);

    

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
