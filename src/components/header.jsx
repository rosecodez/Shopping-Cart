import search from "../assets/search.png";
import notifications from "../assets/notifications.png";
import profile from "../assets/customer.png";
import cart from "../assets/cart.png";

export default function Header() {
    return (
        <section id="header">
            <h2 id="store-logo">Shopping Cart</h2>
            <div id="search-container">
                <input type="search" placeholder="Search" 
                    style={{backgroundImage: `url(${search})`,
                    backgroundSize: '20px',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '189px 3px',
                    paddingLeft: '10px',
                    paddingRight: '33px'}}
                />
            </div>
            <img src={notifications} alt="notifications"
                width={40} />
            <img src={profile} alt="profile"
                width={40} />
            <img src={cart} alt="cart"
                width={40}/>
            <div id="shopping-cart" 
                style={{visibility: "hidden"
                }}>
                <div id="total-items">items</div>
                <div id="total-price">price</div>
            </div>
        </section>
    )
}