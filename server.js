const express = require('express');
const db = require('./data/dbConfig.js');

const server = express();

server.use(db);
server.use(express.json());


server.get('/', (req, res) =>{
    db.select('*').from('Customers').where({ postalcode: '1010' });
});

server.get('/', (req, res) => {
    db.select('*').from('Orders').where({ supplierID: 11});
})

server.get('/', (req, res) => {
    db.select('*').from('Orders').orderBy('OrderDate')
})

server.post('/', (req, res) => {
    db.select('Customers').where({ City: 'London'}).orWhere({ City: 'Madrid'}).orWhere({ Country: 'Brazil'});
})

server.put('/update', (req, res) => {
    
});


module.exports = server;