const {pool} = require("../database.js");
require('dotenv').config();

const cloudinary = require('cloudinary');
const fs = require('fs-extra');

cloudinary.config({
   cloud_name: process.env.CLOUD_NAME,
   api_key: process.env.CLOUD_APIKEY,
   api_secret: process.env.CLOUD_SECRETKEY,
});

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
const uploadImageGroup = async(id, archivo) => {
   idart = Number(id);
   const cloud = await cloudinary.v2.uploader.upload(archivo);
   const url = cloud.url;
   let query1 = "UPDATE inv_grupo set gru_imagen=? where id=?";
   const [result] =  await pool.query(query1, [url, idart]);
   await fs.unlink(archivo);
   return {linkImage: url};
};

//actualiza imagen a un grupo
const actualizaImagen = async(datos) => {
   const {id, imagen} = datos;
   if(!id || !imagen) {
      throw Error("Datos incompletos");
   };
   let query1 = "UPDATE inv_grupo set gru_imagen=? where id=?";
   const [result] =  await pool.query(query1, [imagen, id]);
   return {message: "Imagen Actualizada"};
};

module.exports = { getGroupAll, getGroupById, updateGroup, createGroup, uploadImageGroup, actualizaImagen };