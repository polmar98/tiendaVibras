import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Subtitle from "../Components/Subtitle";
import style from "../styles/ShoppingCar.module.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ShoppingCar() {
   const car = useSelector((state) => state.ShoppingCar.car);
   const navigate = useNavigate();
   const tipo = false;
   let localStorageItems = JSON.parse(localStorage.getItem("Carrito"));
   let carritoCompras = tipo ? car : localStorageItems || [];
   const [oForm, setOform] = useState(carritoCompras);
   let suma = 0;
   carritoCompras.forEach(element => {
       suma+=element.cantidad*element.valorUni;
   });

   useEffect(() => {
      localStorageItems = JSON.parse(localStorage.getItem("Carrito"));
      carritoCompras = tipo ? car : localStorageItems || [];
      setOform(carritoCompras);
  },[]);

   //esta funcion actualiza las cantidades
   const handleCantidad= (e) => {
      e.preventDefault();
      const reg = Number(e.target.id)
      console.log("Registro",reg);
      if(e.target.value<0) e.target.value=0;
      for(let i=0;i<carritoCompras.length;i++) {
          if(carritoCompras[i].registro == reg) {
            carritoCompras[i].cantidad = e.target.value;
            carritoCompras[i].vtotal = carritoCompras[i].cantidad * carritoCompras[i].valorUni;
          }
      };
      localStorage.clear("Carrito");
      const updatedItemsJSON = JSON.stringify(carritoCompras);
      localStorage.setItem("Carrito", updatedItemsJSON);
      //ahora actualizamos el estado local
      setOform(carritoCompras);
   };

   //esta funcion actualiza las tallas
   const handleTalla=(e) => {
     console.log(e.target.value);
     for(let i=0;i<carritoCompras.length;i++) {
          if(carritoCompras[i].registro == e.target.id) {
            carritoCompras[i].talla = e.target.value;
          };
      };
      localStorage.clear("Carrito");
      const updatedItemsJSON = JSON.stringify(carritoCompras);
      localStorage.setItem("Carrito", updatedItemsJSON);
      //ahora actualizamos el estado local
      setOform(carritoCompras);
   };

   //funcion que vacia el carrito
   const handleVaciarCarrito = () => {
      localStorage.clear("Carrito");
      setOform([]);
      suma = 0;
      mensaje('Carrito de compras vaciado');
   };

   const mensaje = (xmensaje) => {
      toast(xmensaje, {
         position: "bottom-right",
         autoClose: 2000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "dark",
         });
   };

   //funcion que elimina items de carrito
   const handleEliminaItem = (ele) => {
      ele.preventDefault();
      const reg = Number(ele.target.value)
      carritoCompras = carritoCompras.filter((element) => element.registro !== reg);
      localStorage.clear("Carrito");
      const updatedItemsJSON = JSON.stringify(carritoCompras);
      localStorage.setItem("Carrito", updatedItemsJSON);
      //ahora actualizamos el estado local
      setOform(carritoCompras);
      suma = 0;
      carritoCompras.forEach(element => {
          suma+=element.cantidad*element.valorUni;
      });
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
             {oForm.map((ele) => 
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
                    <td className={style.accion}><button className={style.borrar}
                       value={ele.registro}
                       onClick={(ele)=>handleEliminaItem(ele)}>Eliminar</button></td>
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
              <button><Link to="/Home">Seguir Comprando</Link></button>
              <button onClick={handleVaciarCarrito}>Vaciar Carrito</button>
              <button>Guardar Carrito</button>
              <button>Generar Pedido</button>
              <button>Finalizar Compra</button>
          </div>
          <ToastContainer />
      </div>
   )
};

export default ShoppingCar;