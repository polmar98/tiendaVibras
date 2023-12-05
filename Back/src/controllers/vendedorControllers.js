const {pool} = require("../database.js");

const getVendedor = async() => {
   let query1 = "SELECT B.ter_tercero,B.ter_nombre1,B.ter_movil,B.id as idtercero,A.id as id from inv_vendedor A ";
   query1+="left join gnr_tercero B on B.id=A.tercero_id where A.ven_activo=1 order by B.ter_nombre1";
   const [result] = await pool.query(query1);
   return result;
};

module.exports = {getVendedor};