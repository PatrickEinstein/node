const express = require("express");
// const http = require('http');
const bodyParser = require('body-parser');
const path = require('path');
const userRoutes = require('./routes/getuser');
const { engine } = require ('express-handlebars');                                               
const registerModel = require('./routes/getuser');
const mongoose = require('mongoose');

///////////////////////////////////////
// CONNECTION TO MONGODB DATABASE

const url ="mongodb+srv://mongodb:onqJUekXZGHVWB2r@cluster0.i9foyr2.mongodb.net/TDBAPI "
//const url ="mongodb+srv://mongodb:onqJUekXZGHVWB2r@cluster0.i9foyr2.mongodb.net/?retryWrites=true&w=majority "


async function connect() {
    try {
        await  mongoose.connect(url);
        console.log("Connected to Mongodb Successfully");
    } catch (error) {
        console.log(`Error -> ${error}`);
    }
}

connect();

module.exports = connect();
////////////////////////////////////////////////


app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json())


//set view engine to detect hbs ext
app.set('view engine', 'hbs')

//configure the handlebar engine to the template directory folder
app.engine( "hbs", engine(
    { 
     extname: "hbs",
     defaultLayout: false, 
     layoutsDir: __dirname + "/views/layouts", 
    }) 
    );


//set the directory and subdir of the hbs files to view
app.set("views", "./views/partials");

app.use(express.static('public'))    

//Serves the body of the page aka "main.hbs" to the container //aka "index.handlebars"
app.get('/', (req, res) => {
res.render('main', {layout : 'index'});
    });

const projects = {
	name : 'Rahul',
	skills : ['Data Mining', 'BlockChain Dev', 'node.js']
}

app.get('/projects', (req, res)=>{
	res.render('projects', {projects : projects});
})


app.use('/users', userRoutes);

app.listen(4000, ( req, res) =>{
    console.log('Server active')
})

module.exports = app;

