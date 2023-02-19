const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Register = require('../models/user-models');
const RegisterModel = mongoose.model("Register");

router.get('/', (req, res) =>{
    
        Register.find(( err, doc ) =>{
            if(!err){
                console.log(doc)
                res.render("profile-page", {data: doc})
            }else{
                console.log((error) => (`some error => ${error}`))
            }
        } )
        
   
});

   module.exports = router;                                                                                                                                                      

        

       
   


router.post('/', async ( req, res) =>{
    const user1 = new Register ({
        username: req.body.name,
        email :  req.body.dob,
        password: req.body.password,
        mobile: req.body.mobile
    })
    try{
        const result = await user1.save()
        res.json(result)

    }catch(error){
        res.send(`some error occured -> ${error}`)
    }
})

router.get('/' , ( req, res) => {
    res.send(' Test of users routes')
})

