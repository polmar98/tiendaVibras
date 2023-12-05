import axios from 'axios';
export const ADD_ITEM_SHOPPINGCAR = "ADD_ITEM_SHOPPINGCAR";
export const NEW_PEDIDO = "NEW_PEDIDO";


//esta actions agrega al localstore del carrito
export const add_itemCar = (item) => {
    return async (dispatch) => {
          return dispatch({
            type: ADD_ITEM_SHOPPINGCAR,
            payload: item,
          });
    }
};

//esta actions envia los datos para almacenar un nuevo pedido
export const newPedido = (datos, rutaPpal) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${rutaPpal}/pedidos`, datos);
      const data = response.data;
      return dispatch({
        type: NEW_PEDIDO,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};