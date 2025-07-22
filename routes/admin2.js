const express = require('express');
const router = express.Router();

const productsController = require('../controller/products.js');

//  ** admin2.js a router file, not the one that starts the server.


const path = require('path');


// localjost:3001/admin/ = > get add-product.html file 

router.get("/", (req , res)=> {

  res.sendFile(path.join(__dirname, "../", "views" , "add-product.html"));

  
}); 




//  /admin/add-product => GET 
router.get('/add-product', (req, res) => {
  console.log("In the /add-product Middleware");
  res.send(`
    <form action="/admin/add-product" method="POST">
      <input type="text" name="title" placeholder="Enter title">
      <button type="submit">Submit</button>
    </form>
  `);
  //  Don't call next() here



});

const products = [] ; // Array to store product 

// CONTROLLER FUNCTION  Hnadling LOgic :

//  This is the router to hamdle controller function

//  /admin/add/product => GET 
router.get("/add/product", productsController.getAddProduct);

//  /admin/add/product => POST
router.post("./add/product", productsController.postAddProduct);




// POST route to handle form submission
//  /admin/add-product => POST 

router.post('/add-product', (req, res) => {
  products.push({title:req.body.title}); // logs { title: 'whatever user types' }
  res.redirect('/'); // Redirect to homepage or wherever
});


module.exports = router ;
