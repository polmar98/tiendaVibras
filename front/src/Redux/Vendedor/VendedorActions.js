import axios from 'axios';
export  const GET_VENDEDORES = "GET_VENDEDORES"

export const getVendedores = (rutaPpal) => {
    return async (dispatch) => {
        try {
          const response = await axios.get(`${rutaPpal}/vendedor`);
          const data = response.data;
          return dispatch({
            type: GET_VENDEDORES,
            payload: data,
          });
        } catch (error) {
          console.log(error);
        }
      };
};