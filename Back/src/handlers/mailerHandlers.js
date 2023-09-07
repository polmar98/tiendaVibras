const express = require("express");
const {getMailer} = require("../controllers/mailerControllers");

const server = express();

server.post('/', async(req, res) => {
   const datos = req.body;
   try {
       const result = await getMailer(datos);
       res.status(200).json(result);
   } catch (error) {
       console.log(error.message);
       res.status(500).json({message: error.message});
   }
});

module.exports = server;