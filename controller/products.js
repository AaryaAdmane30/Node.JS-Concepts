// controllers/admin.js

//  This file contains the controller logic for handling product resquiest

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
    res.redirect('/');
};
