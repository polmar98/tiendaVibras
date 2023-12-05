import React from "react";
import style from "../styles/Contac.module.css";
import Subtitle from "../Components/Subtitle";
import PiePagina from "../Components/PiePagina";

function Contac() {
   const titulo="Contáctenos"; 
   return (
      <div>
        <Subtitle props={titulo}/>
        <div class={style.container}>
        <form action="" className={style.formulario}>
            <input type="text" name="name" placeholder="Nombre" className={style.input}/>
            <input type="text" name="email" placeholder="Email" className={style.input}/>
            <input type="text" name="phone" placeholder="Telefono" className={style.input}/>
            <textarea name="detalles" className={style.area} placeholder="Mensaje"></textarea>
            <button type="submit" className={style.boton}>Enviar</button>
         </form>
        </div>
        <PiePagina/>
      </div>
   )
};

export default Contac;