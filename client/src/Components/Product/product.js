import "./product.css";

export default function Product({product}) {

    // Función para renderizar las estrellas según la calificación
    const renderStars = () => {
        const stars = [];
        const integerRating = Math.floor(product.rating); // Parte entera de la calificación
        const decimalPart = product.rating % 1; // Parte decimal de la calificación

        for (let i = 0; i < 5; i++) {
            if (i < integerRating) {
                stars.push(<span key={i} className="star active">&#9733;</span>);
            } else if (i === integerRating && decimalPart > 0) {
                const decimalWidth = `${decimalPart * 100}%`;
                stars.push(
                    <span key={i} className="star active" style={{ width: decimalWidth }}>
                        &#9733;
                    </span>
                );
            } else {
                stars.push(<span key={i} className="star">&#9733;</span>);
            }
        }
        return stars;
    };

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
                    <div className="product-rating">
                        {renderStars()}
                    </div>
                </div>
            </div>
        </div>
    )
}