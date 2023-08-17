import React from "react";
import style from "../styles/CardArticle.module.css";
import { Link } from "react-router-dom";
import imagex from "../img/buzo3.jpg"
import {add_itemCar} from "../Redux/ShoppingCar/ShoppingCarActions";
import { useDispatch } from "react-redux";

const CardArticle = ({id,name,referen,pPublico,pMayorista,marca,image}) => {
   const dispatch = useDispatch();
   const handlerAddCar = () => {
      const item = {
        id,
        name,
        talla: '*No definida*',
        cantidad: 1,
        valorUni: pPublico,
        vtotal: pPublico,
      };
      dispatch(add_itemCar(item));
      addCarrito(item);
      alert("Se ha agregado un item al carrito");
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
             <img className={style.imagen} src={imagex} alt="" /> 
          </Link>
          <h4 className={style.precio}>${new Intl.NumberFormat().format(pPublico)}</h4>
          <h4 className={style.agregar} onClick={() => handlerAddCar()}>Agregar al Carrito</h4>
      </div>
   )
};

export default CardArticle;