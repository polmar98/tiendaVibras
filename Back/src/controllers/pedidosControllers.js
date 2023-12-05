const {pool} = require("../database.js");
require('dotenv').config();

const grabaPedido = async(datos) => {
   const {sucursal, nit, apellidos, nombres, listaprecio,
          valor, observa, direccion, vendedor,
          celular, email, items} = datos;
   if(!sucursal || !nit || !apellidos || !nombres || !listaprecio ||
      !valor || !direccion || !vendedor || !celular ||
      !email || !items) {
      throw Error("Datos Incompletos");
   };
   //buscamos si existe el tercero
   const [result] =  await pool.query('SELECT * FROM gnr_tercero where ter_documento=?', [nit]);
   let idtercero = 0;
   if(!result) {
      //creamos el tercero
      let query1 = 'INSERT INTO gnr_tercero (ter_documento, ter_tercero, ter_direccion, ter_email, ter_movil) ';
      query1 += ' values(?,?,?,?,?)';
      const nombre = apellidos+' '+nombres;
      const [result0] =  await pool.query(query1, [nit, nombre, direccion, email, celular]);
      //const [grabado] = await pool.query("SELECT last_insert_id() as ultimo");
      idtercero = result0.insertId;
   } else {
      idtercero = result[0].id;
   };
   //definimos la fecha y cargamos el consecutivo
   const fecha = new Date(Date.now());
   const anual = fecha.getFullYear();
   let query2 = 'SELECT MAX(ped_numero) as numero FROM inv_pedidosclientes where YEAR(ped_fecha)=? and sucursal_id=?';
   let consecu = anual.toString()+"0000000";
   const [result1] = await pool.query(query2, [anual, sucursal]);
   if(result1.length>0) {
      consecu = result1[0].numero;
   };


   consecu = consecu.substring(4,11);
   const i = Number(consecu)+1;
   consecu = anual.toString()+i.toString().padStart(7,'0');
 
   //grabamos el nuevo pedido
   query2 = 'INSERT INTO inv_pedidosclientes (ped_numero, sucursal_id, cliente_id, listaprecios_id, ped_fecha, ped_fechavence,';
   query2+= 'ped_bruto, ped_neto, ped_vendedor, ped_usuario) ';
   query2+= 'values(?,?,?,?,?,?,?,?,?,?)';
   const [result2] = await pool.query(query2, [consecu, sucursal, idtercero, listaprecio, fecha, fecha, valor, valor, vendedor, 1]);

   const idPedido = result2.insertId;
   //grabamos los items del pedido

   items.forEach(async(ele) => {
      let query3 = 'INSERT INTO inv_detpedidos (pedido_id, producto_id, dped_cantidad, dped_valoruni, dped_precosto) ';
      query3+= 'values(?,?,?,?,?) ';
      const [result3] = await pool.query(query3, [idPedido, ele.id, ele.cantidad, ele.valorUni, ele.precosto] );
   });
   return {mensaje: "Pedido Grabado", grabado: true};
};

module.exports = {
   grabaPedido,
}