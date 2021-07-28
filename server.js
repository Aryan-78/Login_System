const path = require("path")
const express =  require("express");
const bodyparser = require('body-parser');
const session = require("express-session");

const app = express();
const router = require("./route")

app.use(session({
    secret: "secret",
    resave:false,
    saveUninitialized: true
}))

app.set('view engine','ejs');

app.use('/route',router);

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
    extended:true
}))

app.use('/static',express.static(path.join(__dirname,'static')));

app.get("/",(req,res)=>{
    res.render("text",{title:"Login-Page"});
})

app.listen(3000,()=>{
    console.log("Listen to the server at http://localhost:3000");
});