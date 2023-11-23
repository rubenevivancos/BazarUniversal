const fs = require("fs");


function getByProduct(req, res){
    console.log("[ getByProduct ] INICIO");
    let { search } = req.query;
    console.log("[ getByProduct ] search --> " + search);

    if (search) {
        search = search.toLowerCase();
        console.log("[ getByProduct ] El producto a buscar es: " + search);

        //const data = JSON.parse(fs.readFileSync('C:\\Descargas\\Programacion\\Programacion\\BazarUniversal\\api\\src\\Json\\products.json'));
        const data = JSON.parse(fs.readFileSync('products.json'));
        
        const listProducts = data.products;
        const result = listProducts.filter(product => product.title.toLowerCase().includes(search) || product.category.toLowerCase().includes(search));

        if(result.length){
            console.log("[ getByProduct ] Se encontraron " + result.length + " resultados");
            return res.status(200).json(result);
        }
        console.log("[ getByProduct ] No hay resultados");
        return res.status(422).json({message: "No hay resultados"}); 
    }
    
    return res.status(200).json([]);
}


module.exports = getByProduct;