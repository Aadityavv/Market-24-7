import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

app.get("/",(req,res)=>{
    res.render("login.ejs");
})

app.post("/signin",(req,res)=>{
    res.send("hi")
})
app.post("/signup",(req,res)=>{
    res.render("signUP.ejs")
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})
