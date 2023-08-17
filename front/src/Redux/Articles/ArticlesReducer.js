import {GET_ARTICLES} from './ArticlesActions';

const initialState = {
    articlesList: [],
 };
 
 const ArticlesReducer = (state = initialState, action) => {
    switch (action.type) {
       case GET_ARTICLES: 
         return {...state, articlesList: action.payload};
       default:
          return {...state};
    };
 };
 
 export default ArticlesReducer;