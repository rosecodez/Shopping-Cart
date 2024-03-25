import Item from "./item"

export default function BestDealsSection() {
    const itemsArray = [
        'https://fakestoreapi.com/products/9',
        'https://fakestoreapi.com/products/10',
        'https://fakestoreapi.com/products/11',
        'https://fakestoreapi.com/products/12',
        'https://fakestoreapi.com/products/13',
        'https://fakestoreapi.com/products/14'
    ];
    
    return (
        <section id="best-deals-section">
            <h4>Today's best deals</h4>
            <div id="items">
                {itemsArray.map((itemUrl, index) => (
                    <Item key={index} itemUrl={itemUrl} />
                ))}
            </div>
        </section>
    )
}