// controllers/admin.js

//  This file contains the controller logic for handling product resquiest

const Product = require("../models/product.js");

exports.getAddProduct = (req, res) => {
    res.render('add-product', {
        pageTitle: "Add Product",
        path: "/admin/add-product",
        formCSS: true,
        productCSS: true,
        activeAddproduct: true
    });
};

exports.postAddProduct = (req, res) => {
    const productTitle = req.body.title;
    //  product.push({title:req.body.title});
    console.log("Product Title:", productTitle);

    const product = new Product(productTitle);
    //  as we created a new Product objecct we can now use the save method
    product.save();
    res.redirect('/');
};


exports.getProducts = (req,res,next) => {
    const products = new Product().fetchAll();
    res.render("shop", {

         prods: products,        // your product array
    pageTitle: "Shop",      // dynamic title for the page
    path: "/",              // to highlight the active nav link
    hashProducts: true,     // probably to toggle content conditionally
    activeShop: true,       // used in the EJS to highlight the "shop" nav
    productCSS: true        // maybe to load specific styles

    })
   
}