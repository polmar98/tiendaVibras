const express = require("express");
const {getArticlesAll, getArticlesById} = require("../controllers/articlesControllers");
const server = express();

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
 

module.exports = server;