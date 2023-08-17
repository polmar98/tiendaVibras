const {pool} = require("../database.js");

//devuelve todos los articulos de una linea suministrada
const getArticlesAll = async(id) => {
    const listaPublica = 1;
    const listaMayorista = 2;
    let query1 = "SELECT A.id,A.art_detalles,A.art_referencia,B.marc_nombre,C.det_precioneto as precioPublico,A.art_imagen,";
    query1+=" G.det_precioneto as precioMayorista from inv_articulo A ";
    query1+=" left join inv_marca B on B.id=A.marca_id ";
    query1+=" left join inv_detalistaprecios C on C.det_articuloid=A.id ";
    query1+=" left join inv_detalistaprecios G on G.det_articuloid=A.id ";
    query1+=" left join inv_subgrupo D on D.id=A.subgrupo_id where D.grupo_id=? and C.det_listaid=? ";
    query1+=" and G.det_listaid=? and A.art_mostrarweb=1 order by A.art_detalles"
    const [result] =  await pool.query(query1, [id, listaPublica, listaMayorista]);
    return result;
};

const getArticlesById = async(id) => {
    const listaPublica = 1;
    const listaMayorista = 2;
    let query1 = "SELECT A.id,A.art_detalles,A.art_referencia,B.marc_nombre,C.det_precioneto as precioPublico,A.art_imagen,D.sgru_nombre,";
    query1+=" G.det_precioneto as precioMayorista,F.gru_nombre from inv_articulo A ";
    query1+=" left join inv_marca B on B.id=A.marca_id ";
    query1+=" left join inv_detalistaprecios C on C.det_articuloid=A.id ";
    query1+=" left join inv_detalistaprecios G on G.det_articuloid=A.id ";
    query1+=" left join inv_subgrupo D on D.id=A.subgrupo_id left join inv_grupo F on F.id=D.grupo_id ";
    query1+=" where A.id=? and C.det_listaid=? and G.det_listaid=? ";  
    const [result] =  await pool.query(query1, [id, listaPublica, listaMayorista]);
    return result; 
};

module.exports = { getArticlesAll, getArticlesById};