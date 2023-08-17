const express = require("express");
const {getGroupAll, getGroupById,
       updateGroup, createGroup,
       uploadImageGroup} = require("../controllers/groupsControllers");

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

module.exports = server;

