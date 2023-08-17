const {Router} = require('express');
const router = Router();
const groupsRoutes = require("../handlers/groupsHandlers");
const articlesRoutes = require("../handlers/articlesHandlers");

router.use('/groups', groupsRoutes);
router.use('/articles', articlesRoutes);

module.exports = router;
