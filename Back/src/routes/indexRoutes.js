const {Router} = require('express');
const router = Router();
const groupsRoutes = require("../handlers/groupsHandlers");
const articlesRoutes = require("../handlers/articlesHandlers");
const usersRoutes = require("../handlers/usersHandlers");

router.use('/groups', groupsRoutes);
router.use('/articles', articlesRoutes);
router.use('/users', usersRoutes);

module.exports = router;
