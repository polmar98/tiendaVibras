import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import style from "../styles/Login.module.css";


const LoginBottom = () => {
   const {loginWithRedirect, user, isAuthenticated} = useAuth0();

   const ingresoSistema = async() => {
       await loginWithRedirect();
   };

   return (
      <div>
         <button className={style.autenticar} 
              onClick={()=>ingresoSistema()}>
              Login
         </button><hr/>
      </div>
    )
};

export default LoginBottom;