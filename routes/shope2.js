// Shop2.js is the router file, not the one that starts the server
const express = require("express");
const router = express.Router();

const path = require('path');

//localhost:3001/shop/ => get shop.html file 
router.get('/', (req,res)=>{
res.sendFile(path.join(__dirname, "../" ,'views','shop.html'));

});




// GET /shop-products → Shows the form
//  /shop/shop-product 
router.get('/shop-products', (req, res) => {
  console.log("In the shop product Middleware");
  res.send(`
    <form action="/shop/shop-products" method="POST">
      <input type="text" name="title" placeholder="Enter your order">
      <button type="submit">Submit</button>
    </form>
  `);
});

// POST /purchase → Handles form submission
router.post("/shop-products", (req, res) => {
  console.log(req.body); // logs { title: 'whatever user types' }
  res.redirect("/");
});

module.exports = router;
