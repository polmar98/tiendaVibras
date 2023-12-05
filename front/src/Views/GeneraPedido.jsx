import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Subtitle from "../Components/Subtitle";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style from "../styles/GeneraPedido.module.css";
import PiePagina from "../Components/PiePagina";
import { getVendedores } from "../Redux/Vendedor/VendedorActions";
import { newPedido } from "../Redux/ShoppingCar/ShoppingCarActions";

const GeneraPedido = () => {
   const rutaPpal = useSelector((state) => state.Rutas.rutas); 
   const usuario = useSelector((state) => state.Users.usuario);
   const car = useSelector((state) => state.ShoppingCar.car);
   const tipo = false;
   const [oform, setOform] = useState({
      Cedula: '',
      Apellidos: '',
      Nombres: '',
      Celular: '',
      Direccion: '',
      Email: '',
      Vendedor: 0,
      Observa: '',
      ListaPrecios: usuario == 1 ?2 : 1
   });
   let localStorageItems = JSON.parse(localStorage.getItem("Carrito"));
   let carritoCompras = tipo ? car : localStorageItems || [];
   let suma = 0;
   carritoCompras.forEach(element => {
       suma+=element.cantidad*element.valorUni;
   });
   const listaVendedor = useSelector((state) => state.Vendedor.listaVendedores);
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getVendedores(rutaPpal));
   },[]);


   const validacion = () => {
      if(oform.Cedula.length==0) return false;
      if(oform.Apellidos.length==0) return false;
      if(oform.Nombres.length==0) return false;
      if(oform.Celular.length==0) return false;
      if(oform.Direccion.length==0) return false;
      if(oform.Email.length==0) return false;
      if(oform.Vendedor==0) return false;
      if(carritoCompras.length==0) return false;
      return true;
   };


   const handleSubmit = (e) => {
      e.preventDefault();
      if(!validacion()) {
         window.alert("Datos Incompletos");
         return;
      };
      const datos= {
         sucursal: 1,
         nit: oform.Cedula,
         apellidos: oform.Apellidos,
         nombres: oform.Nombres,
         celular: oform.Celular,
         direccion: oform.Direccion,
         email: oform.Email,
         observa: oform.Observa,
         vendedor: oform.Vendedor,
         items: carritoCompras,
         listaprecio: oform.ListaPrecios,
         valor: suma
      };
      dispatch(newPedido(datos, rutaPpal));
      localStorage.clear("Carrito");
      mensaje('Pedido Generado Satisfactoriamente');
   };

 

   const mensaje = (xmensaje) => {
    toast(xmensaje, {
       position: "top-right",
       autoClose: 1000,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
       theme: "dark",
       });
   };

   const handleChange = (e) => {
      e.preventDefault();
      const property = e.target.name;
      const value = e.target.value;
      setOform({...oform, [property]: value });
   };

   const selectVendedor = (e) => {
      e.preventDefault();
      const id = e.target.value;
      setOform({...oform, Vendedor: id});
   };

   return (
      <div>
          <Subtitle props="Generador de Pedidos"/>
          <div className={style.formulario}>
             <table className={style.tabla}>
             <thead>
                <tr>
                   <th>It</th>
                   <th>Detalles</th>
                   <th>Talla</th>
                   <th>Cantidad</th>
                   <th>Valor Unit</th>
                   <th>Valor Total</th>
                </tr>
             </thead>
             <tbody>
                 {carritoCompras.map(ele =>
                     <tr>
                        <td>{ele.registro}</td>
                        <td>{ele.name}</td>
                        <td>{ele.talla}</td>
                        <td>{ele.cantidad}</td>
                        <td className={style.numero}>${new Intl.NumberFormat().format(ele.valorUni)}</td>
                        <td className={style.numero}>${new Intl.NumberFormat().format(ele.vtotal)}</td>
                     </tr>
                  )}
                  <tr>
                     <td></td><td></td>
                     <td>GRAN TOTAL</td>
                     <td></td><td></td>
                     <td className={style.numero}>${new Intl.NumberFormat().format(suma)}</td>
                  </tr>
             </tbody>
             </table>  
          </div> 
          <h2>Datos del Cliente</h2>
          <div className={style.formulario}>
          <form>
             <input type="text" 
                    name="Cedula" 
                    placeholder="Documento Identidad" 
                    className={style.items} 
                    onChange={(e)=>handleChange(e)}
                    value={oform.Cedula}/>
             <input type="text" 
                    name="Apellidos"
                    placeholder="Apellidos" 
                    className={style.items} 
                    onChange={(e)=>handleChange(e)}
                    value={oform.Apellidos}/>
             <input type="text" 
                    name="Nombres" 
                    placeholder="Nombres"
                    className={style.items}
                    onChange={(e)=>handleChange(e)}
                    value={oform.Nombres}/>
             <input type="text" 
                    name="Celular"
                    placeholder="Celular"
                    className={style.items}
                    onChange={(e)=>handleChange(e)}
                    value={oform.Celular}/>
             <input type="text"
                    name="Direccion" 
                    placeholder="Direccion Envio"
                    className={style.items} 
                    onChange={(e)=>handleChange(e)}
                    value={oform.Direccion}/>
             <input type="text" 
                    name="Email" 
                    placeholder="Email" 
                    className={style.items} 
                    onChange={(e)=>handleChange(e)}
                    value={oform.Email}/>
             <br/>
             <label>Vendedor :</label>
             <select name="Vendedor" onChange={(e)=>selectVendedor(e)}>
                {listaVendedor.map(elem => 
                   elem.id == oform.Vendedor
                    ? <option value={elem.id} selected>{elem.ter_tercero}</option> 
                    : <option value={elem.id}>{elem.ter_tercero}</option>  
                )}
             </select>
             <br/><br/>
             <textarea name="Observa" 
                       cols="60" 
                       placeholder="Observaciones" 
                       onChange={(e)=>handleChange(e)}
                       value={oform.Observa}
                       rows="5">{oform.Observa}</textarea><br/>
             <button className={style.boton} onClick={(e)=>handleSubmit(e)}>Enviar</button>
          </form>              
          </div>
          <ToastContainer />
          <PiePagina/>
      </div>
   )
};

export default GeneraPedido;