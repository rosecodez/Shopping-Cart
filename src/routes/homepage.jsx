import BestDealsSection from "../components/best deals section";

export default function Homepage({ setCartTotal }) {
    return (
        <div>
            <BestDealsSection setCartTotal={setCartTotal} />
        </div>
    );
}
