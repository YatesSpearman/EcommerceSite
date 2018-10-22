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



app.listen(3000, () => {
    console.log('Started on port 3000');
});