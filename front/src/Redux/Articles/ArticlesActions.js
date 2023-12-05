import axios from 'axios';
export const GET_ARTICLES = "GET_ARTICLES";
export const GET_ARTICLEBYID = 'GET_ARTICLEBYID';
export const CAMBIAR_PAGINA = "CAMBIAR_PAGINA";
export const SEARCH_ARTICLES = "SEARCH_ARTICLES";
export const UPDATE_IMAGEN = "UPDATE_IMAGEN";

export const getArticles = (rutaPpal, idGroup) => {
    return async (dispatch) => {
        try {
          const response = await axios.get(`${rutaPpal}/articles/group/${idGroup}`);
          const data = response.data;
          return dispatch({
            type: GET_ARTICLES,
            payload: data,
          });
        } catch (error) {
          console.log(error);
        }
      };
};

export const getArticleById = (rutaPpal, idArt) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${rutaPpal}/articles/${idArt}`);
      const data = response.data;
      return dispatch({
        type: GET_ARTICLEBYID,
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

export const searchArticles = (rutaPpal, filtro) => {
  return async (dispatch) => {
      try {
        const response = await axios.get(`${rutaPpal}/articles?art_name=${filtro}`);
        const data = response.data;
        return dispatch({
          type: GET_ARTICLES,
          payload: data,
        });
      } catch (error) {
        console.log(error);
      }
    };
};

export const actualizarImagen = (rutaPpal, datos) => {
  console.log(datos);
  return async(dispatch) => {
    try {
       const response = await axios.post(`${rutaPpal}/articles`, datos);
       return dispatch({
         type: "UPDATE_IMAGEN",
       });
    } catch (error) {
      console.log(error);
    }
  }
};


