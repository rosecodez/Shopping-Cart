import { useEffect } from "react";
import { useState } from "react";
export default function Item() {
    const [imageURL, setImageURL] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const itemsArray = [
        'https://fakestoreapi.com/products/9',
        'https://fakestoreapi.com/products/10',
        'https://fakestoreapi.com/products/11',
        'https://fakestoreapi.com/products/12',
        'https://fakestoreapi.com/products/13',
        'https://fakestoreapi.com/products/14'
    ]

    useEffect(() => {
        fetch(itemsArray[0], {mode: "cors"})
        .then((response) => {
            if (response.status >= 400) {
              throw new Error("server error");
            }
            return response.json();
        })
        .then((response) => setImageURL(response.image))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));

    }, []);

    if (error) return <p>A network error was encountered</p>;
    if (loading) return <p>Loading...</p>;

    return (
        imageURL && (
        <div className="item">
            <div className="item-name">Item Name</div>
            <div className="item-price">Item Price</div>
            <div className="bottom-item"></div>
            <img src={imageURL} className="fetchedImages" alt={"placeholder text"} />
        </div>
    )
    );
}