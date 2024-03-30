import Header from "../components/header"
import AllItemsSection from "../components/all items section";
import { useState } from "react";

export default function ShopPage() {
    const [cartTotal, setCartTotal] = useState(0);
    return (
        <>
            <AllItemsSection setCartTotal={setCartTotal} />
        </>
    )
}