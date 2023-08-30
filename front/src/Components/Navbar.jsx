import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import style from "../styles/Navbar.module.css";
import logo from "../img/logo.jpg";
import carrito from "../img/carrito2.png";
import contactenos from "../img/contactenos.png";
import nosotros from "../img/nosotros.png";
import inicio from "../img/inicio.png";
import login from "../img/login.png";
import Searchbar from "./Searchbar";

function Navbar() {
    const usuario = useSelector((state) => state.Users.usuario);
    return (
        <div className={style.barra}>
            <img src={logo} alt="" className={style.logo}/>
            <h1 className={style.titulo}>Tienda Vibras</h1>
            <ul className={style.menu}>
                <li className={style.items}><Link to="/Home"><img src={inicio} className={style.carrito} alt=""/></Link></li>
                <li className={style.items}><img src={nosotros} className={style.carrito} alt=""/></li>
                <li className={style.items}><img src={contactenos} className={style.carrito} alt=""/></li>
                <li className={style.items}><Link to="/Shopping"><img src={carrito} className={style.carrito} alt=""/></Link></li>
                <li className={style.items}><Link to="/Login"><img src={login} className={style.carrito} alt=""/></Link></li>
                <li className={style.items}>{usuario.name}</li>
            </ul>
            <div className={style.searchbar}>
               <Searchbar/>
            </div>
          
        </div>
    )
};

export default Navbar;