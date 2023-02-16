const express = require("express");
const http = require('http');
const bodyParser = require('body-parser');

app = express();
const server = http.createServer(app);


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get('/' , (req, res) =>{
    res.send('This server is listening')
}
);

const collection = {
    people : [
        {
            name: "Kwam1"
        }
    ]
}


app.post('/', ( req, res) => {
  
    console.log(req.body)
    if( req.body && req.body.name){
        collection.people.push(
            {
                name: req.body.name
            }
        )
            
        
    }
    res.send(collection);
})

app.listen(3000, ( req, res) =>{
    console.log('Server active')
})
