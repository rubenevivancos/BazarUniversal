const fs = require("fs");


function productSearch(req, res){
    console.log("[ productSearch ] INICIO");
    let { search } = req.query;
    console.log("[ productSearch ] search --> " + search);

    if (search) {
        search = search.toLowerCase();
        console.log("[ productSearch ] El producto a buscar es: " + search);

        //const data = JSON.parse(fs.readFileSync('C:\\Descargas\\Programacion\\Programacion\\BazarUniversal\\api\\src\\Json\\products.json'));
        const data = JSON.parse(fs.readFileSync('products.json'));
        
        const listProducts = data.products;
        const result = listProducts.filter(product => product.title.toLowerCase().includes(search) || product.category.toLowerCase().includes(search));

        if(result.length){
            console.log("[ productSearch ] Se encontraron " + result.length + " resultados");
            return res.status(200).json(result);
        }
        console.log("[ productSearch ] No hay resultados");
        return res.status(422).json({message: "No hay resultados"}); 
    }
    
    return res.status(200).json([]);
}


module.exports = productSearch;