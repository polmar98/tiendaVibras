import React from "react";
import style from "../styles/CardGrupo.module.css";
import { Link } from "react-router-dom";
import imagex from "../img/buzo3.jpg"

const CardGrupo = ({id,name,image,xusuario}) => {

   return (
      <div className={style.tarjeta}>
         <Link to={`/Articles/group/${id}`}>  
             <h4 className={style.titulo}>{name}</h4>
             <img className={style.imagen} src={image} alt="" /> 
             {xusuario.admin==1 
                ? <Link to={`/ImagenGroups/${id}`}> 
                  <h4 className={style.boton}>Cambiar Imagen</h4></Link>
                : <div></div>}
          </Link>
      </div>
   )
};

export default CardGrupo;