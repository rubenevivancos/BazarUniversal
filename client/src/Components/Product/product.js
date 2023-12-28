import "./product.css";

export default function Product({product}) {

    return(
        <div className="product-container">
            <div className="product-image">
                <img src={product.images[0]} alt={product.title} width="150" height="150"/>
            </div>
            <div className="product-details">
                <div className="product-title">{product.title}</div>
                <div className="product-description">{product.description}</div>
                <div className="product-price-and-rating">
                    <div className="product-price">{product.price}</div>
                    <div className="product-rating">{product.rating}
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                    </div>
                </div>
            </div>
        </div>
    )
}