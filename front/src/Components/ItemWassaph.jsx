import React from "react";
import style from "../styles/PiePagina.module.css";

const ItemWassaph = ({id,nombre,numero}) => {

   const Wassaph = () => {
      console.log("ID",id);
   };

   return (
      <div>
         <h4 className={style.wassaph}
             onClick={()=>Wassaph()}
         >{nombre}</h4>
      </div>
   )
};

export default ItemWassaph;