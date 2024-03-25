import { useEffect } from "react";
import { useState } from "react";

export default function Item({ itemUrl }) {
    const [imageURL, setImageURL] = useState(null);
    const [title, setTitle] = useState(null);
    const [price, setPrice] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(itemUrl, { mode: "cors" })
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error("server error");
                }
                return response.json();
            })
            .then((response) => {
                setImageURL(response.image);
                setTitle(response.title);
                setPrice(response.price);
            })
            .catch((error) => setError(error))
            .finally(() => setLoading(false));

    }, [itemUrl]);

    if (error) return <p>A network error was encountered</p>;
    if (loading) return <p>Loading...</p>;

    return (
        imageURL && title && price && (
        <div className="item">
            <div className="item-name">{title}</div>
            <div className="item-price">{price}$</div>
            <div className="bottom-item"></div>
            <img src={imageURL} className="fetchedImages" alt={"placeholder text"} />
        </div>
    )
    );
}