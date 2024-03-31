import { useState, useEffect } from "react";

export default function CheckoutSection({ handleAddToCart }) {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            try {
                const parsedCart = JSON.parse(savedCart);
                console.log(parsedCart);
                const itemMap = new Map();
                parsedCart.forEach(item => {
                    const imageUrl = item.imageURL;
                    if (itemMap.has(imageUrl)) {
                        itemMap.set(imageUrl, itemMap.get(imageUrl) + 1); // Increment count
                    } else {
                        itemMap.set(imageUrl, 1); // Initialize count
                    }
                });
                const uniqueItems = Array.from(itemMap.entries()).map(([imageUrl, count]) => ({ imageUrl, count, title: parsedCart.find(item => item.imageURL === imageUrl).title }));
                setCartItems(uniqueItems);
            } catch (error) {
                console.error("Error parsing cart data:", error);
            }
        }
    }, []);

    return (
        <section id="checkout-section">
            <h3>Checkout</h3>
            <h4>Your cart items:</h4>
            <div id="items">
                {cartItems.map((item, index) => (
                    <div className="item" key={index}>
                        <div className="item-name-container">
                            <div className="item-name">{item.title}</div>
                        </div>
                        <img src={item.imageUrl} className="fetchedImages" alt={`Item ${index}`} />
                        <button onClick={handleAddToCart} className="add-to-cart">Add 1</button>
                        <button onClick={handleAddToCart} className="add-to-cart">Delete 1</button>
                        <p className="item-price">Quantity: {item.count}</p>
                    </div>
                ))}
            </div>


        </section>
    );
}
