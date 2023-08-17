import React from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "../styles/Navbar.module.css";
import logo from "../img/logo.jpg";
import carrito from "../img/carrito2.png";
import contactenos from "../img/contactenos.png";
import nosotros from "../img/nosotros.png";
import inicio from "../img/inicio.png";

function Navbar() {
    return (
        <div className={style.barra}>
            <img src={logo} alt="" className={style.logo}/>
            <ul className={style.menu}>
                <li className={style.items}><Link to="/Home"><img src={inicio} className={style.carrito} alt=""/></Link></li>
                <li className={style.items}><img src={nosotros} className={style.carrito} alt=""/></li>
                <li className={style.items}><img src={contactenos} className={style.carrito} alt=""/></li>
                <li className={style.items}><Link to="/Shopping"><img src={carrito} className={style.carrito} alt=""/></Link></li>
            </ul>
            <ul className={style.menu}>
               <li className={style.items}>Ingreso</li>
               <li className={style.items}>Registro</li>
            </ul>
        </div>
    )
};

export default Navbar;