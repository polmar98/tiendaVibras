import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getVendedores } from "../Redux/Vendedor/VendedorActions";
import ItemWassaph from "./ItemWassaph";
import style from "../styles/PiePagina.module.css";

const PiePagina = () => {
   const rutaPpal = useSelector((state) => state.Rutas.rutas); 
   const listaVendedor = useSelector((state) => state.Vendedor.listaVendedores);
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getVendedores(rutaPpal));
   },[]);


   return (
      <div>
          <hr/>
          <h3 className={style.titulo}>Comunicate con nuestros Asesores</h3>
          <div className={style.contenedor}>
              {listaVendedor.map(ele => 
                 <ItemWassaph key={ele.id}
                              id={ele.idvendedor}
                              nombre={ele.ter_nombre1}
                              numero={ele.ter_movil}
                 />
              )}
          </div>
 
      </div>
   )
};

export default PiePagina;