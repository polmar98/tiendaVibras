const express = require("express");
const {getVendedor} = require("../controllers/vendedorControllers");

const server = express();

server.get('/', async(req, res) => {
    try {
        const result = await getVendedor();
        res.status(200).json(result);
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.messaje});       
    }

});

module.exports = server;