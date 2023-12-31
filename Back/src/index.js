const express = require("express");
const router = express();
const routes  = require("./routes/indexRoutes");
const morgan = require("morgan");
const multer = require('multer');
const path = require('path');

//midleweares
router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});
router.use(express.json());
router.use(express.urlencoded({ extended: false }));
router.use(morgan("dev"));
const storage = multer.diskStorage({
  destination: path.join(__dirname, 'public/uploads'),
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + path.extname(file.originalname));
  }
});

router.use(multer({storage}).single('image'));
router.use(routes);
router.listen(4000);
console.log("Server Running in Port 4000");