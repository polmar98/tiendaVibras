import {ADD_ITEM_SHOPPINGCAR} from "./ShoppingCarActions";

const initialState = {
    car: [],
};

const ShoppingCarReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM_SHOPPINGCAR:
            return {...state, car: [...state.car, action.payload]};
 
        default:
            return {...state};
    }
};

export default ShoppingCarReducer;