import axios from 'axios';
export const GET_ARTICLES = "GET_ARTICLES"

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