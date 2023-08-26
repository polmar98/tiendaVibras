const express = require("express");
const {getUser, getUserAuth0} = require("../controllers/usersControllers");

const server = express();

server.post('/', async(req, res) => {
   const {user, password} = req.body; 
   try {
      const result = await getUser(user, password);
      res.status(200).json(result);
   } catch (error) {
      res.status(500).json({message: error.message});
   }
});

server.post('/auth0', async(req, res) => {
   const {usuario, email} = req.body; 
   try {
      const result = await getUserAuth0(usuario, email);
      res.status(200).json(result);
   } catch (error) {
      res.status(500).json({message: error.message});
   }
});


module.exports = server;