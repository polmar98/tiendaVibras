export const GET_ROUTES = "GET_ROUTES";

export const getRoutes = () => {
    return async (dispatch) => {
        return dispatch({
            type: GET_ROUTES,
          });
    };
};
