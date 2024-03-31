import CheckoutSection from "../components/checkout section";

export default function CheckoutPage({ setCartTotal }) {
    return (
        <div>
            <CheckoutSection setCartTotal={setCartTotal} />
        </div>
    );
}
