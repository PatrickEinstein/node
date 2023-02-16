const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const app = express();
const server = http.createServer();
const { MongoClient } = require("mongodb");

                                                                                                                                       
const url ="mongodb+srv://mongodb:onqJUekXZGHVWB2r@cluster0.i9foyr2.mongodb.net/?retryWrites=true&w=majority "
const client = new MongoClient(url);

async function connect() {
    try {
        await client.connect(url);
        console.log("Connected correctly to server");
    } catch (error) {
        console.log(`Error -> ${error}`);
    }
}

app.get('/' , (req, res ) => {
    res.send('Server is responding ')
})

connect();


app.listen(4000, ( req, res) => {
    console.log('server is listening')
})

