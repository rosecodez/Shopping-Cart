import { useEffect } from "react";
import { useState } from "react";

export default function Item({ itemUrl, addToCart}) {
    const [imageURL, setImageURL] = useState(null);
    const [title, setTitle] = useState(null);
    const [price, setPrice] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
 
    //fetch product title, price, and image from fake shop API
    useEffect(() => {
        fetch(itemUrl, { mode: "cors" })
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error("Server error");
                }
                return response.json();
            })
            .then((data) => {
                setImageURL(data.image);
                setTitle(data.title);
                setPrice(data.price);
            })
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, [itemUrl]);

    // function to handle adding item to cart
    function handleAddToCart() {
        console.log("Adding item to cart:", { title, price, imageURL });
        const newItem = { title, price, imageURL };
        // existing items from local storage
        const existingItems = JSON.parse(localStorage.getItem('items')) || [];
        // add new item to existing items array
        const updatedItems = [...existingItems, newItem];
        // store updated items array in local storage
        localStorage.setItem('items', JSON.stringify(updatedItems));
        console.log("Updated items:", updatedItems);
        // Add item to cart
        addToCart(newItem); 
    }

    // Return network error text if there is an error while fetching data
    if (error) return <p>A network error was encountered</p>;
    // Display loading text until data is fetched
    if (loading) return <p>Loading...</p>;

    return (
        imageURL && title && price && (
        <div className="item">
            <div className="item-name-container">
                <div className="item-name">{title}</div>
            </div>
            <div className="item-price">${price}</div>
            <button onClick={handleAddToCart} className="add-to-cart">Add to cart</button>
            <img src={imageURL} className="fetchedImages" alt={"Placeholder text"} />
        </div>
    )
    );
}
