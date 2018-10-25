const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 8889,
    user: 'root',
    password: 'root',
    database: 'Ecommerce'
});

connection.connect((error) => {
    if(error) {
        return console.log('Connection Error');
    }

    console.log('Connected Succesfully');
});

var app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');

        res.header('Access-Control-Allow-Methods', 'POST', 'PATCH', 'GET', 'DELETE');

        next();
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// -----------PRODUCTS ENDPOINT-----------//
app.get('/products', (req, res) => {
    connection.query('SELECT * FROM products ORDER BY price', function(error, results, fields) {
        if(error) throw error;
        res.send(results);
    })
});

app.post('/products', (req, res) => {
    let name = req.body.name;
    let price = req.body.price;
    let productType = req.body.productType;
    let imgUrl = req.body.imgUrl;
    let caption = req.body.cpation;

    var sqlInsert = "INSERT INTO products (name, price, productType, imgUrl, caption) VALUES ";
    sqlInsert += `("${name}", "${price}", "${productType}", "${imgUrl}", "${caption}")`;

    connection.query(sqlInsert, function(err, results){
        if(err) throw err;
        console.log("Number of records inserted " + results.affectedRows);
    })
});

app.delete('products/:id', (req, res)=> {
    var id = req.params.id;

    if(isNaN(id)) {
        return console.log("Must enter a valid ID. ID enetered is not a number");
    }

    let sqlDeleteProductsByID = "DELETE FROM products WHERE productID = ?";

    connection.query(sqlDeleteProductsByID, id, function(error, results, fields) {
        if(error) throw error;
        console.log(`Removed Contact with ID of ${id} from the database`);
    });
});

app.patch('/products/:id', (req, res) => {
    var id = req.params.id;
    var safeProductsColumns = ["name", "price", "productType", "imgUrl", "caption"];
    var body = _.pick(req.body, safeProductColumns);

    if(isNaN(id)) {
        return console.log("Must enter a valid ID. ID enetered is not a number");
    }

    var setProductsQuery = [];
    var paramProducts = [];

    for(var i=0; i < safeProductsColumns.length; i++) {
        var colname = safeProductsColumns[i];
        if(body[colname]) {
            setProductsQuery.push(colname + " =?");
            paramProducts.push(body[colname]);
        }
    }

    if(setProductsQuery.length > 0) {
        var sqlPatchProductsByID = "UPDATE products SET " + setProductsQuery.join(', ') + " WHERE productID = ?";
        paramProducts.push(id);

        connection.query(sqlPatchProductsByID, paramProducts, function(error, results, fields) {
            if(error) throw error;
            console.log(`Updated Product with ID of ${id}`);
            res.status(200).send(results);
        })
    }
    
});


// -----------Contacts ENDPOINT-----------//
app.get('/contacts', (req, res) => {
    connection.query('SELECT * FROM contacts', function(error, results, fields) {
        if(error) throw error;
        res.send(results);
    })
});

app.post('/contacts', (req, res) => {
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let phoneNumber = req.body.phoneNumber;
    let addressLine1 = req.body.addressLine1;
    let addressLine2 = req.body.addressLine2;

    var sqlInsert = "INSERT INTO contacts (firstName, lastName, email, phoneNumber, addressLine1, addressLine2) VALUES ";

    sqlInsert += `("${firstName}", "${lastName}", "${email}", "${phoneNumber}", "${addressLine1}", "${addressLine2}")`;

    connection.query(sqlInsert, function(err, results) {
        if(err) throw err;
        console.log("Number of records inserted " + results.affectedRows);
    })
});

app.delete('contacts/:id', (req, res)=> {
    var id = req.params.id;

    if(isNaN(id)) {
        return console.log("Must enter a valid ID. ID enetered is not a number");
    }

    let sqlDeleteContactsByID = "DELETE FROM contacts WHERE contactID = ?";
    

    connection.query(sqlDeleteContactsByID, id, function(error, results, fields) {
        if(error) throw error;
        console.log(`Removed Contact with ID of ${id} from the database`);
    });
});

app.patch('/contacts/:id', (req, res) => {
    var id = req.params.id;
    var safeContactsColumns = ["firstName", "lastName", "email", "phoneNumber", "addressLine1", "addressLine2"];
    var body = _.pick(req.body, safeContactsColumns);

    if(isNaN(id)) {
        return console.log("Must enter a valid ID. ID enetered is not a number");
    }

    var setContactsQuery = [];
    var paramContacts = [];

    for(var i=0; i < safeContactsColumns.length; i++) {
        var colname = safeContactsColumns[i];
        if(body[colname]) {
            setContactsQuery.push(colname + " =?");
            paramContacts.push(body[colname]);
        }
    }

    if(setContactsQuery.length > 0) {
        var sqlPatchContactsByID = "UPDATE contacts SET " + setContactsQuery.join(', ') + " WHERE contactID = ?";
        paramContacts.push(id);

        connection.query(sqlPatchContactsByID, paramContacts, function(error, results, fields) {
            if(error) throw error;
            console.log(`Updated Contact with ID of ${id}`);
            res.status(200).send(results);
        })
    }
    
});



app.listen(3000, () => {
    console.log('Started on port 3000');
});