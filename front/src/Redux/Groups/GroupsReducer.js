import {GET_GROUPS, GET_GROUPBYID, CAMBIAR_PAGINA} from './GroupsActions';

const initialState = {
   groupList: [],
   group: {},
   paginaActual: 1,
};

const GroupsReducer = (state = initialState, action) => {
   switch (action.type) {
      case GET_GROUPS:
         return {...state, groupList: action.payload};
      case GET_GROUPBYID:
         return {...state, group: action.payload};  
      case CAMBIAR_PAGINA:
         return {...state, paginaActual: action.payload};    
      default:
         return {...state};
   };
};

export default GroupsReducer;