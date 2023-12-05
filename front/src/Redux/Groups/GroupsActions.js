import axios from 'axios';
export const GET_GROUPS = "GET_GROUPS"
export const GET_GROUPBYID = "GET_GROUPBYID"
export const CAMBIAR_PAGINA = 'CAMBIAR_PAGINA'
export const UPDATE_IMAGEN = "UPDATE_IMAGEN"

export const getGroups = (rutaPpal) => {
    return async (dispatch) => {
        try {
          const response = await axios.get(`${rutaPpal}/groups`);
          const data = response.data;
          return dispatch({
            type: GET_GROUPS,
            payload: data,
          });
        } catch (error) {
          console.log(error);
        }
      };
};

export const getGroupById = (rutaPpal, id) => {
  return async (dispatch) => {
      try {
        const response = await axios.get(`${rutaPpal}/groups/${id}`);
        const data = response.data;
        return dispatch({
          type: GET_GROUPBYID,
          payload: data,
        });
      } catch (error) {
        console.log(error);
      }
    };
};

export function cambiarPagina(numero) {
  return {
      type: CAMBIAR_PAGINA,
      payload: numero
  }        
};

export const actualizarImagen = (rutaPpal, datos) => {
  console.log(datos);
  return async(dispatch) => {
    try {
       const response = await axios.post(`${rutaPpal}/groups`, datos);
       return dispatch({
         type: "UPDATE_IMAGEN",
       });
    } catch (error) {
      console.log(error);
    }
  }
};
