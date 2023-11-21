import { getByProductReducer } from "../Reducer/productReducer";

export const getByProduct = (product) => async (dispatch) => {
    try {
        console.log("Se busca: " + product);
        //var response = (await axios.get(`http://localhost:3001/dogs/getByName?name=${name}`)).data;
        //console.log("[ src/Store/Actions/index.js/getByName(name) ] La busqueda por nombre de: " + name + " encontro " + response.length + " resultados"); 
        dispatch(getByProductReducer([]));

    } catch (error) {
        console.log("[ getByProduct ] Excepcion: error.message: " + error.message);
        dispatch(errorMsg("Ocurrio un error...intentelo mas tarde"));
    }
}