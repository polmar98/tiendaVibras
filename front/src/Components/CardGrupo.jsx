import React from "react";
import style from "../styles/CardGrupo.module.css";
import { Link } from "react-router-dom";
import imagex from "../img/buzo3.jpg"

const CardGrupo = ({id,name,image}) => {
   return (
      <div className={style.tarjeta}>
         <Link to={`/Articles/${id}`}>  
             <h4 className={style.titulo}>{name}</h4>
             <img className={style.imagen} src={imagex} alt="" /> 
          </Link>
      </div>
   )
};

export default CardGrupo;