export default function Product({product}) {

    return(
        <div class="product-container">
            <div class="product-image">
                <img src={product.images[0]} alt={product.title} width="150" height="150"/>
            </div>
            <div class="product-details">
                <div class="product-title">{product.title}</div>
                <div class="product-description">{product.description}</div>
                <div class="product-price-and-rating">
                    <div class="product-price">{product.price}</div>
                    <div class="product-rating">{product.rating}
                        <span class="star">&#9733;</span>
                        <span class="star">&#9733;</span>
                        <span class="star">&#9733;</span>
                        <span class="star">&#9733;</span>
                        <span class="star">&#9733;</span>
                    </div>
                </div>
            </div>
        </div>
    )
}