import './homeWithSearchBox.css';

export default function HomeWithSearchBox() {
    return(
        <div className="container">
            <div className="row">
                <div className="food-car"></div>
            </div>
            <div className="row">
                <h1>Bazar Online</h1>
            </div>
            <div className="row">
                <div className="search-container">
                    <input type="text" placeholder="laptops, smartphones, ..." className="search-box"/>
                    <div className="search-icon"></div>
                </div>
            </div>
            <div className="row">
                <button className="search-button">Buscar</button>
            </div>
        </div>
    )
}