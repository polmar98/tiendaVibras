import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import groupReducer from "./Groups/GroupsReducer";
import rutaReducer from "./Rutas/RutasReducer";
import articlesReducer from "./Articles/ArticlesReducer";
import shoppingCarReducer from "./ShoppingCar/ShoppingCarReducer";

const rootReducer = combineReducers({
    Groups: groupReducer,
    Rutas: rutaReducer,
    Articles: articlesReducer,
    ShoppingCar: shoppingCarReducer,

});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;