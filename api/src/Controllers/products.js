


function getByProduct(req, res){
    console.log("[ getByProduct ] INICIO");
    const { search } = req.query;

    const products = [];
    /*
    if (search) {
        console.log("[ getByProduct ] El producto a buscar es: " + search);
        //const products = listDogs.filter(d => d.name.toLowerCase().includes(name.toLowerCase()));
        //const products = [];
        if(products.length){
            console.log("[ getByProduct ] Se encontraron " + products.length + " resultados");
            return res.status(200).json(products);
        }
        console.log("[ getByProduct ] No hay resultados");
        return res.status(422).json({message: "No hay resultados"}); 
    }
    */
    return res.status(200).json(products);
}


module.exports = getByProduct;