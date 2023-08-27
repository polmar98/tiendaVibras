import {GET_ARTICLES, GET_ARTICLEBYID, CAMBIAR_PAGINA} from './ArticlesActions';

const initialState = {
    articlesList: [],
    articulo: {},
    paginaActual: 1,
 };
 
 const ArticlesReducer = (state = initialState, action) => {
    switch (action.type) {
       case GET_ARTICLES: 
         return {...state, articlesList: action.payload};
       case GET_ARTICLEBYID:
         return {...state, articulo: action.payload};   
       case CAMBIAR_PAGINA:
         return {...state, paginaActual: action.payload};   
       default:
          return {...state};
    };
 };
 
 export default ArticlesReducer;