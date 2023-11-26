import axios from "axios";

import { getByProductReducer } from "../Reducer/productReducer";

export const getByProduct = (product) => async (dispatch) => {
    try {
        console.log("Se busca: " + product);
        var response = (await axios.get(`http://localhost:3001/dogs/getByName?name=${product}`)).data;
        console.log("[ getByName(product) ] La busqueda por nombre de: " + product + " encontro " + response.length + " resultados"); 
        dispatch(getByProductReducer(response));

    } catch (error) {
        console.log("[ getByProduct ] Excepcion: error.message: " + error.message);
        dispatch(errorMsg("Ocurrio un error...intentelo mas tarde"));
    }
}