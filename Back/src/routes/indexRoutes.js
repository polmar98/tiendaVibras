const {Router} = require('express');
const router = Router();
const groupsRoutes = require("../handlers/groupsHandlers");
const articlesRoutes = require("../handlers/articlesHandlers");
const usersRoutes = require("../handlers/usersHandlers");
const mailerRoutes = require("../handlers/mailerHandlers");
const vendedorRoutes = require("../handlers/vendedorHandlers");
const pedidosRoutes = require("../handlers/pedidosHandlers");

router.use('/groups', groupsRoutes);
router.use('/articles', articlesRoutes);
router.use('/users', usersRoutes);
router.use('/mailer', mailerRoutes);
router.use('/vendedor', vendedorRoutes);
router.use('/pedidos', pedidosRoutes);

module.exports = router;
