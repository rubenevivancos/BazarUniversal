import axios from "axios";

import { productSearchReducer } from "../Reducer/productReducer";

export const productSearch = (product) => async (dispatch) => {
    try {
        console.log("Se busca: " + product);
        var response = (await axios.get(`http://localhost:3001/products/productSearch?search=${product}`)).data;
        console.log("[ productSearch(product) ] La busqueda del producto: " + product + " encontro " + response.length + " resultados"); 
        dispatch(productSearchReducer(response));

    } catch (error) {
        console.log("[ productSearch ] Excepcion: error.message: " + error.message);
        dispatch(errorMsg("Ocurrio un error...intentelo mas tarde"));
    }
}