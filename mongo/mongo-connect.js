const express = require('express');
const { MongoClient } = require("mongodb");
const registerModel = require('../models/user-models');



const url ="mongodb+srv://mongodb:onqJUekXZGHVWB2r@cluster0.i9foyr2.mongodb.net/?retryWrites=true&w=majority "
const client = new MongoClient(url);

async function connect() {
    try {
        await client.connect(url);
        console.log("Connected to Mongodb Successfully");
    } catch (error) {
        console.log(`Error -> ${error}`);
    }
}


connect();

module.exports = connect();




