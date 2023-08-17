export const ADD_ITEM_SHOPPINGCAR = "ADD_ITEM_SHOPPINGCAR";


//esta actions agrega al localstore del carrito
export const add_itemCar = (item) => {
    return async (dispatch) => {
          return dispatch({
            type: ADD_ITEM_SHOPPINGCAR,
            payload: item,
          });
    }
};

