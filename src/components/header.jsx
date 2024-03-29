import search from "../assets/search.png";
import notifications from "../assets/notifications.png";
import profile from "../assets/customer.png";
import cart from "../assets/cart.png";

export default function Header({ cartTotal }) {
    return (
        <section id="header">
            <div id="header-left">
                <h2 id="store-logo">Shopping Cart</h2>
                <div id="search-container">
                <input type="search"  placeholder="Search" 
                    style={{backgroundImage: `url(${search})`,
                    backgroundSize: '20px',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '381px 3px',
                    paddingLeft: '10px',
                    paddingRight: '33px'}}
                />
                </div>
            </div>
            <div id="header-right">
                <img src={notifications} className="images" alt="notifications"
                    width={40} />
                <img src={profile} className="images"  alt="profile"
                    width={40} />
                <img src={cart} className="images" alt="cart"
                    width={40}/>
                <div id="shopping-cart" className="images">
                    <div id="total-items">Items: </div>
                    <div id="total-price">Total: {cartTotal}$</div>
                </div>
            </div>
        </section>
    )
}