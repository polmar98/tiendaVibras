import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import style from "../styles/Login.module.css";


const Profile = () => {
   const { user, isAuthenticated} = useAuth0();

   return (
      <div>
         <h4>{user.name}</h4>
         <img src={user.picture} alt=""/>
         <h4>{user.email}</h4>
      </div>
    )
};

export default Profile;