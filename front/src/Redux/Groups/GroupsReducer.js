import {GET_GROUPS, GET_GROUPBYID} from './GroupsActions';

const initialState = {
   groupList: [],
   group: {},
};

const GroupsReducer = (state = initialState, action) => {
   switch (action.type) {
      case GET_GROUPS:
         return {...state, groupList: action.payload};
      case GET_GROUPBYID:
         return {...state, group: action.payload};   
      default:
         return {...state};
   };
};

export default GroupsReducer;