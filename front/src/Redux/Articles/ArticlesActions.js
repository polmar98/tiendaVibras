import axios from 'axios';
export const GET_ARTICLES = "GET_ARTICLES";
export const GET_ARTICLEBYID = 'GET_ARTICLEBYID';
export const CAMBIAR_PAGINA = "CAMBIAR_PAGINA";

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
}