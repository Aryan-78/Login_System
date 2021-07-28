const express = require('express');
const bodyparser = require('body-parser');
const router = express.Router();

router.use(bodyparser.json())
router.use(bodyparser.urlencoded({
    extended:true
}))

const data = {
    email: "aryan.singhdevara@gmail.com",
    name: "aryan",
    password: "password"
}

// body parser is always needed to be added

router.post("/post",(req,res)=>{
    if(data.email==req.body.Mail && data.name==req.body.Name && data.password==req.body.Password){
        req.session.email = req.body.Mail;
        res.redirect("/route/dashboard");
    }else{
        res.send("Invalid ID");
    }
});

router.get("/dashboard",(req,res)=>{
    if(req.session.email){
        res.send(`VAlid User \n ${req.session.email}`)
    }else{
        res.send(`INVALID USER`)
    }
})

router.get("/loggout",(req,res)=>{
    req.session.destroy((err)=>{
        if(err){
            res.send(`You are facing an error ${err}`)
        }else{
            res.send(`Successfully logged out !!!`)
        }
    })
})

module.exports=router;