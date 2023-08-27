import axios from 'axios';
export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const LOGIN_USER_AUTH0 = "LOGIN_USER_AUTH0";

export const loginUser = (rutaPpal, oForm) => {
    return async (dispatch) => {
        try {
          const response = await axios.post(`${rutaPpal}/users`, oForm);
          const data = response.data;
          return dispatch({
            type: LOGIN_USER,
            payload: data,
          });
        } catch (error) {
          console.log(error);
        }
      };
};

export const ingresoSistema = (rutaPpal, datos) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${rutaPpal}/users/auth0`, datos);
      const data = response.data;
      return dispatch({
        type: LOGIN_USER_AUTH0,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const logoutUser = (rutaPpal) => {
    return async (dispatch) => {
        return dispatch({
            type: LOGOUT_USER,
        });
      };
};