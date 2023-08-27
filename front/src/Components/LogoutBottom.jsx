import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import style from "../styles/Login.module.css";
import { logoutUser } from "../Redux/Users/UsersActions";
import { useDispatch } from "react-redux";

const LogoutBottom = () => {
   const dispatch = useDispatch();
   const {logout} = useAuth0();

   const salirSistema = () => {
       console.log("Saliendo del sistema");
       dispatch(logoutUser());
       logout();
   };

   return (
      <div>
         <button className={style.autenticar} 
              onClick={()=>salirSistema()}>
              Logout
         </button><hr/>
      </div>
    )
};

export default LogoutBottom;