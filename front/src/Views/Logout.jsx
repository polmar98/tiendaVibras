import React from "react";
import { useNavigate } from "react-router-dom";
import {logoutUser} from '../Redux/Users/UsersActions';
import { useSelector, useDispatch } from "react-redux";

function Logout() {
    const dispatch = useDispatch();
    const usuario = useSelector((state) => state.Users.usuario);
    const navigate = useNavigate();
    dispatch(logoutUser());
    navigate('/home');
    return (
      <div>
         <h1>Ud ha salido del Sistema</h1>
      </div>
    )
};

export default Logout;