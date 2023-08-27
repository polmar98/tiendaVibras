import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Subtitle from "../Components/Subtitle";
import style from "../styles/Login.module.css";
import {loginUser} from '../Redux/Users/UsersActions';
import LoginBottom from "../Components/LoginBottom";
import LogoutBottom from "../Components/LogoutBottom";
import Profile from "../Components/Profile";
import { useAuth0 } from "@auth0/auth0-react";

function Login() {
   const [oForm, setOform] = useState({user: "", password: ""});
   const dispatch = useDispatch();
   const rutaPpal = useSelector((state) => state.Rutas.rutas); 
   const usuario = useSelector((state) => state.Users.usuario);
   const navigate = useNavigate();
   const {isAuthenticated, user} = useAuth0();


   const handleChange = (e) => {
     const campo = e.target.name;
     const valor = e.target.value;
     setOform({...oForm, [campo]: valor });
   };

   const handleLogin = (e) => {
      dispatch(loginUser(rutaPpal, oForm));
      navigate('/home');
   };

   return (
      <div>
         <Subtitle props={"Ingreso Usuario"}/>
         {isAuthenticated ? <LogoutBottom/> : <LoginBottom/>}
         {isAuthenticated ? <Profile/> : <hr/>}
      </div>
   )
};

export default Login;