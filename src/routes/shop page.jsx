import AllItemsSection from "../components/all items section";

export default function ShopPage({ setCartTotal }) {
    return (
        <div>
            <AllItemsSection setCartTotal={setCartTotal} />
        </div>
    );
}
