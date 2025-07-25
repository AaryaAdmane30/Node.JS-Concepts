//  model is a repre/ion of your data. It defines the structure, rules, and relationships of the data you store in your database.moud

 
const products = [];
 module.exports =class Product {
    //  exporting the Product class which is the blueprint fro creating product objects

    constructor(title){

        // A constructor is a special method in a class. It runs automatically
        //  when you create a new object from that class using new.
        this.title = title;


        // const p1 = new Product('iPhone');
// JavaScript creates a new empty object: {}.

// It calls the constructor method and passes 'iPhone' as the title.

// Inside the constructor, this.title = title sets the title property on the new object.

// Now, p1 becomes:  
// { title: 'iPhone' }





// very time you say new Product('Soap'), 
// the machine takes 'Soap' and builds an object { title: 'Soap' }
    }

    save(){
        products.push(this);
    }

    static fetchAll(){
        return products;  // ✅ Fixed!
    }
}