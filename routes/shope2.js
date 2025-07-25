// Shop2.js is the router file, not the one that starts the server
const express = require("express");
const router = express.Router();


const productsController = require("../controller/products.js");


//  using a Controller to handle logic 
router.get('/', productsController.getAddProduct);



module.exports = router;
