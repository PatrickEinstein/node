// const router = require('./get-homepage')
// const collection = {
//     people : [
//         {
//             name: "Kwam1"
//         }
//     ]
// }


// router.post('/', ( req, res) => {
  
//     console.log(req.body)
//     if( req.body && req.body.name){
//         collection.people.push(
//             {
//                 name: req.body.name
//             }
//         )
            
        
//     }
//     res.send(collection);
// })


// router.post('/', async ( req, res) =>{
//     const user = new User({
//         name: req.body.name,
//         dob:  req.body.dob,
//         mobile: req.body.mobile
//     })
//     try{
//         const result = await user.save()
//         res.json(result)

//     }catch(error){
//         res.send(`some error occured -> ${error}`)
//     }
// })
