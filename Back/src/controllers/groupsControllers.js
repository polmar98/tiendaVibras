const {pool} = require("../database.js");

//devuelve todos los grupos
const getGroupAll = async() => {
   const [result] =  await pool.query('SELECT * FROM inv_grupo where gru_mostrarweb=1 order by gru_nombre')
   return result;
};

//devuelve un grupo por el Id
const getGroupById = async(id) => {
   const [result] =  await pool.query('SELECT * FROM inv_grupo where id = ?', [id]);
   return result[0];
};

//actualiza un grupo
const updateGroup = async(id, datos) => {
   const {nombre} = datos;
   const [result] = await pool.query('UPDATE inv_grupo SET gru_nombre=? where id=?', [nombre, id]);
   return result;
};

//crea un nuevo grupo
const createGroup = async(datos) => {
   const {nombre} = datos;
   if(!nombre) throw Error("Datos Incompletos");
   const [result] = await pool.query('INSERT INTO inv_grupo (gru_nombre) VALUES(?)', [nombre]);
   return result;
};

//carga imagen a un grupo
const uploadImageGroup = async(id) => {
   return "Subir Imagen Grupo";
};

module.exports = { getGroupAll, getGroupById, updateGroup, createGroup, uploadImageGroup };