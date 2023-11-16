import './homeWithSearchBox.css';

export default function HomeWithSearchBox() {
    return(
        <div class="container">
            <div class="row">
                <img src="carrito.png" alt="Carrito de compras" class="icon"/>
            </div>
            <div class="row">
                <h1>Bazar Online</h1>
            </div>
            <div class="row">
            <div class="search-container">
                <input type="text" placeholder="laptops, smartphones, ..." class="search-box"/>
                <div class="search-icon"></div>
            </div>
            </div>
            <div class="row">
                <button class="search-button">Buscar</button>
            </div>
        </div>
    )
}