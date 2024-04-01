import { useState, useEffect } from "react";

export default function CheckoutSection() {
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
                        itemMap.set(imageUrl, itemMap.get(imageUrl) + 1);
                    } else {
                        itemMap.set(imageUrl, 1);
                    }
                });
                const uniqueItems = Array.from(itemMap.entries()).map(([imageUrl, count]) => 
                    ({ imageUrl, count, title: parsedCart.find(item => item.imageURL === imageUrl).title }));
                setCartItems(uniqueItems);
            } catch (error) {
                console.error("Error parsing cart data:", error);
            }
        }
    }, []);
    
    // Function to add an item to the cart
    const addToCart = (item) => {
        const updatedCart = [...cartItems, item]; 
        setCartItems(updatedCart);

        // Update cart data in local storage
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        
    };

    return (
        <section id="checkout-section">
            <h3>Checkout</h3>
            <h4>Your cart items:</h4>
            <div id="checkout-items">
                {cartItems.map((item, index) => (
                    <div className="checkout-item" key={index} >
                        <div className="item-name-container">
                            <div className="item-name">{item.title}</div>
                        </div>
                        <img src={item.imageUrl} className="checkout-fetchedImages" alt={`Item ${index}`} />
                        <div id="item-buttons">
                            <button onClick={addToCart} className="add-to-checkout-btn">Add</button>
                            <button className="delete-to-checkout-btn">Delete</button>
                        </div>
                        <p className="item-price">Quantity: {item.count}</p>
                    </div>
                ))}
            </div>
            <button id="send-order">Send order</button>

        </section>
    );
}
