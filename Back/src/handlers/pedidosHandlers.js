const express = require("express");
const {grabaPedido} = require('../controllers/pedidosControllers');
const server = express();

server.post('/', async(req, res) => {
   const datos = req.body; 
   try {
     const result = await grabaPedido(datos);
     res.status(200).json(result);
   } catch (error) {
     console.log(error.message)
     res.status(500).json({message: error.messaje, grabado: false});        
   }
});

module.exports = server;