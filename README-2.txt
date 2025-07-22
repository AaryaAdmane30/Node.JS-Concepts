# Middlware :

Request 
Middlware next() - req, res, next
Middlware res.send()
Response 

# 
//  Body parser middlware help us to read data from (req.body) when a client sends a form or JSON

# app.use(bodyParser.urlencoded({extended:true})) ;//; this is middlware  
//  extended: true → req.body becomes { user: { name: 'Aarya' } }  , Yo, decode the body of incoming requests if the content type is application/x-www-form-urlencoded — like HTML form submissions.”

#
# MVC :

Model View Controller:

Model	-Handles data and logic	Mongoose schema for a User, Product, etc.
View	- What the user sees	EJS template or React frontend (if used)
Controller-	Decides what to do	A function like createUser(req, res)