const express = require("express");
const {getGroupAll, getGroupById,
       updateGroup, createGroup,
       uploadImageGroup, actualizaImagen} = require("../controllers/groupsControllers");


const server = express();

//esta ruta devuelve todos los grupos
server.get('/', async(req, res) => {
   try {
       const result = await getGroupAll();
       res.status(200).json(result);
   } catch (error) {
       res.status(500).json({message: error.message});
   }
});

//esta ruta devuelve un grupo por el Id
server.get('/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const result = await getGroupById(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
 });

 //actualizar imagen de un grupo
 server.post('/image/:id', async(req, res) => {
    const {id} = req.params; 
    const archivo = req.file.path;
    try {
       //const url =await cloudinary.v2.uploader.upload(req.file.path);
       const result = await uploadImageGroup(id, archivo);
       res.status(200).send("Imagen Actualizada")
    } catch (error) {
       console.log(error.message)
       res.status(500).json({message: error.messaje});
    } 
 });

 //actualizar imagen de grupo
 server.post('/', async(req, res) => {
    const datos = req.body;
    try {
        const result = await actualizaImagen(datos);
        res.status(200).json(result);
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.messaje});        
    }
 });

module.exports = server;

