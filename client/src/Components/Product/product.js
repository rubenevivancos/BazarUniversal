export default function Product({product}) {

    return(
        <div >
            <div>
                <img src={product.images[0]} alt={product.title} width="150" height="150"/>
            </div>
            <div>
                {product.title}
            </div>
            <div>
                {product.description}
            </div>
            <div>
                {product.price}
            </div>
            <div>
                {product.rating}
            </div>
        </div>
    )
}