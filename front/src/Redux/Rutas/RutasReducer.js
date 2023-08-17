import {GET_ROUTES} from './RutasActions';

const initialState = {
    rutas: 'http://localhost:4000',
 };
 
 const RutasReducer = (state = initialState, action) => {
    switch (action.type) {
       default:
          return state;
    };
 };
 
 export default RutasReducer;