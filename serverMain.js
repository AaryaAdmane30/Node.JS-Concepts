
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//  express2.js is the main file that starts the server from there router at admin2.js 
const adminRoutes = require("./routes/admin2.js");
const shopeRoutes = require("./routes/shope2.js");

//  COntroller 
const  errorController = require("./controller/error.js");

// Body parser middlware help us to read data from (req.body) when a client sends a form or JSON
app.use(bodyParser.urlencoded({extended:true})) ;//; this is middlware  
//  extended: true → req.body becomes { user: { name: 'Aarya' } }  , Yo, decode the body of incoming requests if the content type is application/x-www-form-urlencoded — like HTML form submissions.”
// In the  another Middleware 
// { title: 'hi aarya' }
// In the  another Middleware 

app.use( "/admin" ,adminRoutes); // Mount the admin routes
app.use("/shop" , shopeRoutes) ;


// 3.
//  This is middlware that will be executed after the previous middlewares  (Home route)
// Dummy homepage
app.get('/', (req, res) => {
  res.send('<h1>Home Page here after coming back from  /admin/add-product and /shop/shop-products</h1>');
});


// 404 handler (should always be last)
// app.use((req, res) => {
//   res.status(404).send('<h1>Page not found</h1>');
// }); 
//  Intead of this use CONTROLLER to handle the logic 


app.use(errorController.get404) ; // 404 error handler middlware 


app.listen(3001, () => {
    console.log("Server is running at Port 3001")

});