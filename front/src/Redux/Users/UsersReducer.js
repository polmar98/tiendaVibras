import { LOGIN_USER,
         LOGOUT_USER ,
         LOGIN_USER_AUTH0} from "./UsersActions";

const initialState = {
    usuario: {
        id: 3,
        name: "",
        mayorista: 0,
        admin: 0,
        bloqueado: 0,
    },
 };

 const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
       case LOGIN_USER:
            const usu3 = {id: action.payload.id,
                         name: action.payload.name,
                         mayorista: action.payload.mayorista,
                         admin: action.payload.admin,
                         bloqueado: action.payload.bloqueado };
            if(usu3.bloqueado == 1){
               const usu3 = {id: 0, name: '', mayorista: 0, admin: 0, bloqueado: 1};  
            };
            return {...state, usuario: usu3};   
       case LOGOUT_USER:
         const usu = {id: 0,
                      name: '',
                      mayorista: 0,
                      admin: 0 }
          return {...state, usuario: usu};
       case LOGIN_USER_AUTH0:
          const usu2 = {id: action.payload.id,
                        name: action.payload.name,
                        mayorista: action.payload.mayorista,
                        admin: action.payload.admin,
                        bloqueado: action.payload.bloqueado }
          if(usu2.bloqueado == 1){
              const usu2 = {id: 0, name: '', mayorista: 0, admin: 0, bloqueado: 1};  
          };                        
          return {...state, usuario: usu2};   
       default:
          return {...state};
    };
 };

 export default UsersReducer;