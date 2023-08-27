import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getArticleById } from "../Redux/Articles/ArticlesActions";
import { useParams, useNavigate } from "react-router-dom";
import style from "../styles/Details.module.css";
import {add_itemCar} from "../Redux/ShoppingCar/ShoppingCarActions";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Details() {
    const rutaPpal = useSelector((state) => state.Rutas.rutas); 
    const dispatch = useDispatch();
    const params = useParams();
    const art = useSelector((state) => state.Articles.articulo);
    const pPublico = art.precioPublico

    useEffect(() => {
       dispatch(getArticleById(rutaPpal, params.id));
    },[]);

    const mensaje = () => {
      toast('🦄 Articulo agregado al carrito!', {
         position: "top-right",
         autoClose: 2000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "dark",
         });
   };

    const handlerAddCar = () => {
        const item = {
          id: art.id,
          name: art.art_detalles,
          talla: '*No definida*',
          cantidad: 1,
          valorUni: pPublico,
          vtotal: pPublico,
        };
        dispatch(add_itemCar(item));
        addCarrito(item);
        mensaje();
     };

     const addCarrito = (item) => {
        let localStorageJSON = localStorage.getItem("Carrito");
        let storedItems = [];
        let nreg = 0;
        if(localStorageJSON!==null) {
           storedItems = JSON.parse(localStorageJSON); 
           storedItems.forEach((ele) => nreg = ele.registro);
        };
        nreg++;
        const nitem = {registro: nreg,
                       id: item.id,
                       name: item.name,
                       talla: item.talla,
                       cantidad: item.cantidad,
                       valorUni: item.valorUni,
                       vtotal: item.vtotal}   
        storedItems.push(nitem);
        const updatedItemsJSON = JSON.stringify(storedItems);
        localStorage.setItem("Carrito", updatedItemsJSON);
     };
  

    return (
        <div className={style.principal}>
            <div className={style.caja}>
                <img src={art.art_imagen} alt="" className={style.imagen}/>
            </div>
            <div className={style.caja}>
               <h4 className={style.agregar} onClick={() => handlerAddCar()}>Agregar al Carrito</h4>
               <h3>{art.art_detalles}</h3>
               <h4>Referencia : {art.art_referencia}</h4>
               <h4>Marca : {art.marc_nombre}</h4>
               <h4>Grupo : {art.gru_nombre}</h4>
               <h4>Precio : ${new Intl.NumberFormat().format(pPublico)}</h4>
            </div>
            <ToastContainer />
         </div>
    )
};

export default Details;