import { useState, useEffect } from "react";

export default function CheckoutSection() {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        // Initialize cart items from local storage when component mounts
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            try {
                const parsedCart = JSON.parse(savedCart);
                if (Array.isArray(parsedCart)) {
                    // Set the cart items directly
                    setCartItems(parsedCart);
                } else {
                    setCartItems([]);
                }
            } catch (error) {
                console.error("Error parsing cart data:", error);
            }
        } else {
            setCartItems([]);
        }
    }, []);

    // Function to calculate total price
    useEffect(() => {
        const total = cartItems.reduce((acc, item) => acc + (item.price * item.count || 0), 0);
        setTotalPrice(total.toFixed(2));
    }, [cartItems]);

    // Function to add an item to the cart
    const addToCart = (item) => {
        let updatedCart = [...cartItems];
        const existingItemIndex = updatedCart.findIndex(cartItem => cartItem.imageUrl === item.imageUrl);
        if (existingItemIndex !== -1) {
            updatedCart[existingItemIndex].count++;
        } else {
            // If the item is not in the cart, add it with a count of 1
            updatedCart = [...updatedCart, { ...item, count: 1 }];
        }

        localStorage.setItem('cart', JSON.stringify(updatedCart)); // Store updated cart
        setCartItems(updatedCart);
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
                            <button onClick={() => addToCart(item)} className="add-to-checkout-btn">Add</button>
                            <button className="delete-to-checkout-btn">Delete</button>
                        </div>
                        <p className="item-price">Quantity: {item.count}</p>
                    </div>
                ))}
            </div>
            <p>Total Price: ${totalPrice}</p>
            <button id="send-order">Send order</button>
        </section>
    );
}
