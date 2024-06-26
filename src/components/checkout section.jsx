import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function CheckoutSection() {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        // Initialize cart items from local storage when component mounts
        const savedCart = localStorage.getItem('cart');
        console.log("Saved Cart:", savedCart);
        if (savedCart) {
            try {
                const parsedCart = JSON.parse(savedCart);
                if (Array.isArray(parsedCart)) {
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
                        ({ imageUrl, count, title: parsedCart.find(item => item.imageURL === imageUrl).title, price: parsedCart.find(item => item.imageURL === imageUrl).price }));
                    setCartItems(uniqueItems);
                    console.log("Parsed Cart:", parsedCart);
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

    const addToCart = (item) => {
        setCartItems(prevCartItems => {
            const existingItemIndex = prevCartItems.findIndex(cartItem => cartItem.imageUrl === item.imageUrl);
    
            if (existingItemIndex !== -1) {
                // If the item already exists, increment its count
                const updatedCart = [...prevCartItems];
                updatedCart[existingItemIndex].count++;
                return updatedCart;
            } else {
                // If the item is not in the cart, add it with a count of 1
                return [...prevCartItems, { ...item, count: 1 }];
            }
        });
    };
    const sendOrder =() => {
        console.log("local storage was cleared!")
        localStorage.clear();
    }

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
            <Link to = "/page/thankyou-page">
                <button onClick={sendOrder} id="send-order">Send order</button>
            </Link>
        </section>
    );
}
