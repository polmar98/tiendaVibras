import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Subtitle from "../Components/Subtitle";
import style from "../styles/ShoppingCar.module.css";


function ShoppingCar() {
   const car = useSelector((state) => state.ShoppingCar.car);
   const carUpd = useSelector((state) => state.ShoppingCar.carUpdate);
   const dispatch = useDispatch();
   const tipo = false;
   let localStorageItems = JSON.parse(localStorage.getItem("Carrito"));
   const carritoCompras = tipo ? car : localStorageItems || [];
   let suma = 0;
   carritoCompras.forEach(element => {
       suma+=element.cantidad*element.valorUni;
   });


   const handleCantidad= (e) => {
      e.preventDefault();
      for(let i=0;i<carritoCompras.length;i++) {
          if(carritoCompras[i].registro == e.target.id) {
            carritoCompras[i].cantidad = e.target.value;
            carritoCompras[i].vtotal = carritoCompras[i].cantidad * carritoCompras[i].valorUni;
          }
      };
      localStorage.clear("Carrito");
      const updatedItemsJSON = JSON.stringify(carritoCompras);
      localStorage.setItem("Carrito", updatedItemsJSON);

   };

   return (
      <div>
          <Subtitle props="Resumen de su Compra"/>
          <table className={style.tabla}>
             <tr>
                <th>It</th>
                <th>Detalles</th>
                <th>Talla</th>
                <th>Cantidad</th>
                <th>Valor Unit</th>
                <th>Valor Total</th>
                <th>Accion</th>
             </tr>
             {carritoCompras.map((ele) => 
                <tr>
                    <td>{ele.registro}</td>
                    <td>{ele.name}</td>
                    <td>{ele.talla}</td>
                    <td className={style.cantidad}>
                        <input type="number"
                               name="cantidad"
                               value={ele.cantidad}
                               id={ele.registro}
                               className={style.input2}
                               onChange={(e)=>handleCantidad(e)}/>
                    </td>
                    <td className={style.numero}>{ele.valorUni}</td>
                    <td className={style.numero}>${new Intl.NumberFormat().format(ele.vtotal)}</td>
                    <td className={style.borrar}>Eliminar</td>
                </tr>
             )}
             <tr>
                <td></td>
                <td></td>
                <td>GRAN TOTAL</td>
                <td></td>
                <td></td>
                <td className={style.numero}>${new Intl.NumberFormat().format(suma)}</td>
                <td></td>
             </tr>
          </table>
          <hr/>
          <br/>
          <div className={style.botones}>
              <button>Seguir Comprando</button>
              <button>Vaciar Carrito</button>
              <button>Guardar Carrito</button>
              <button>Generar Pedido</button>
              <button>Finalizar Compra</button>
          </div>
      </div>
   )
};

export default ShoppingCar;