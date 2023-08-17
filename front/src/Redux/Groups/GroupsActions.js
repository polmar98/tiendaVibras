import axios from 'axios';
export const GET_GROUPS = "GET_GROUPS"
export const GET_GROUPBYID = "GET_GROUPBYID"

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
