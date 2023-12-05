import { GET_VENDEDORES } from "./VendedorActions";

const initialState = {
    listaVendedores: []
};

const VendedorReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_VENDEDORES:
            return {...state, listaVendedores: action.payload};
        default:
            return {...state};
    };
};

export default VendedorReducer;