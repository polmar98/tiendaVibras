import React from "react";
import style from "../styles/Subtitle.module.css";

function Subtitle({props}) {
   return (
      <div className={style.barra}>
         <h1 className={style.titulo}>{props}</h1>
      </div>
   )
};

export default Subtitle;