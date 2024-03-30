import BestDealsSection from "../components/best deals section"
import { useState } from "react";

export default function Homepage() {
    const [cartTotal, setCartTotal] = useState(0);
    return (
        <>
            <BestDealsSection setCartTotal={setCartTotal} />
        </>
    )
}