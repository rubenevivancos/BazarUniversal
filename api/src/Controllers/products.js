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

        //Obteniendo el listado de la busqueda
        const result = listProducts.filter(product => product.title.toLowerCase().includes(search) || product.category.toLowerCase().includes(search));


        //Obteniendo la cantidad de productos por categoria del listado de la busqueda: INICIO
        const categories = result.map((object) => object.category);
        const uniqueCategories = new Set(categories);

        const categoriesWithCount = [];

        uniqueCategories.forEach((category) => {
            const objectsByCategory = result.filter((object) => object.category === category);
            categoriesWithCount.push({ category: category, count: objectsByCategory.length });
        });
        //Obteniendo la cantidad de productos por categoria del listado de la busqueda:FIN

        for(let i=0; i<categoriesWithCount.length; i++){
            console.log("category -->" + categoriesWithCount[i].category);
            console.log("count -->" + categoriesWithCount[i].count);
        }

        let resul = {listProducts: result, categoriesWithCount: categoriesWithCount};

        if(result.length){
            console.log("[ productSearch ] Se encontraron " + result.length + " resultados");
            return res.status(200).json(resul);
        }
        console.log("[ productSearch ] No hay resultados");
        return res.status(422).json({message: "No hay resultados"}); 
    }
    
    return res.status(200).json([]);
}


module.exports = productSearch;