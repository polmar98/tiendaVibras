require('dotenv').config();
const express = require("express");
const {getArticlesAll,
      getArticlesById,
      updateImagenArticle,
      searchArticles} = require("../controllers/articlesControllers");
const server = express();


//esta ruta devuelve todos los articulos filtrados por un query
server.get('/', async(req, res) => {
      const filtro = req.query; 
      try {
         const result = await searchArticles(filtro);
         res.status(200).json(result);
      } catch (error) {
         console.log(error.message);
         res.status(500).json({message: error.messaje});
      }
});


//esta ruta devuelve todos los articulos de una linea con la lista de precios enviada
server.get('/group/:id', async(req, res) => {
   const {id} = req.params; 
   try {
      const result = await getArticlesAll(id);
      res.status(200).json(result);
   } catch (error) {
      res.status(500).json({message: error.messaje});
   }
});

//devuelve un solo articulo
server.get('/:id', async(req, res) => {
    const {id} = req.params; 
    try {
       const result = await getArticlesById(id);
       res.status(200).json(result);
    } catch (error) {
       res.status(500).json({message: error.messaje});
    }
 });
 
 //actualizar imagen de un articulo
 server.post('/image/:id', async(req, res) => {
   const {id} = req.params; 
   const archivo = req.file.path;
   try {
      //const url =await cloudinary.v2.uploader.upload(req.file.path);
      const result = await updateImagenArticle(id, archivo);
      res.status(200).json(result);
   } catch (error) {
      console.log(error.message)
      res.status(500).json({message: error.messaje});
   }



});


module.exports = server;