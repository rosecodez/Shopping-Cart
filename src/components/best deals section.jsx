import Item from "./item";
import { useState, useEffect } from "react";

export default function BestDealsSection() {
    const itemsArray = [
        'https://fakestoreapi.com/products/9',
        'https://fakestoreapi.com/products/10',
        'https://fakestoreapi.com/products/11',
        'https://fakestoreapi.com/products/12',
        'https://fakestoreapi.com/products/13',
        'https://fakestoreapi.com/products/14'
    ];
    const [cart, setCart] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);
    
    useEffect(() => {
        console.log("cart total: " + cartTotal);
    }, [cartTotal]);

    const addToCart = (item) => {
        setCart(prevCart => {
            console.log("Item price is: " + item.price);
            const newCart = [...prevCart, item];
            const newTotal = newCart.reduce((total, cartItem) => total + cartItem.price, 0);
            setCartTotal(newTotal);

            return newCart;
        });
    };

    return (
        <section id="best-deals-section">
            <h4>Today's best deals</h4>
            <div id="items">
                {itemsArray.map((itemUrl, index) => (
                    <Item key={index} itemUrl={itemUrl} addToCart={addToCart} setCart={setCart} />
                ))}
            </div>
        </section>
    );
}
