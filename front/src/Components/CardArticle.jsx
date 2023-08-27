import React from "react";
import style from "../styles/CardArticle.module.css";
import { Link } from "react-router-dom";
import imagex from "../img/noimagen.png"
import {add_itemCar} from "../Redux/ShoppingCar/ShoppingCarActions";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CardArticle = ({id,name,referen,pPublico,pMayorista,marca,image,idusua,idAdmin}) => {
   const dispatch = useDispatch();
   const precio = idusua == 1 ? pMayorista : pPublico;
   if(image.length > 0) imagex = image;

   const handlerAddCar = () => {
      const item = {
        id,
        name,
        talla: '*No definida*',
        cantidad: 1,
        valorUni: precio,
        vtotal: precio,
      };
      dispatch(add_itemCar(item));
      addCarrito(item);
      mensaje();
   };

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
      <div className={style.tarjeta}>
         <h4 className={style.titulo}>{name}</h4>
         <Link to={`/Details/${id}`}>  
             <img className={style.imagen} src={image} alt="" /> 
          </Link>
          <h4 className={style.precio}>${new Intl.NumberFormat().format(precio)}</h4>
          {idAdmin==1 
             ? <Link to={`/ImagenArticles/${id}`}><h4 className={style.agregar}>Cambiar Imagen</h4></Link>
             : <h4 className={style.agregar} onClick={() => handlerAddCar()}>Agregar al Carrito</h4>
          }
          <ToastContainer />
      </div>
   )
};

export default CardArticle;