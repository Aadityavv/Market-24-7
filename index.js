import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;
app.set('view engine', 'ejs'); // Set EJS as the view engine


let responseMessage="";
let booleanResponse = null;

const db = new pg.Client({
    user:"postgres",
    host:"localhost",
    password:"Aaditya",
    database:"Market_24/7",
    port:5434
})

db.connect(err=>{
    if (err) {
        console.log(`Error connecting to database ${err.stack}`);
    }
    else{
        console.log(`Connected to database successfully`);
    }
});

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

app.get("/",(req,res)=>{
    res.render("login.ejs");
})

app.post("/signin",(req,res)=>{
    res.render("signIN.ejs")
})

app.post("/signup",(req,res)=>{
    res.render("signUP.ejs")
})
app.get("/signIN", (req, res) => { // Add this route
    res.render("signIN.ejs");
});
app.post("/SignedUP",async(req,res)=>{
    const name = req.body.name;
    const phno = req.body.phno;
    const email = req.body.email;
    const password = req.body.password;

    console.log(name,phno,email,password)

    try {
        await db.query("INSERT INTO users (username, phno, email, userPassword) VALUES ($1, $2, $3, $4)", [name, phno, email, password]);
        responseMessage = "Signed up successfully. Now you can sign in easily!";
        booleanResponse = "True";
        res.send("HI")
    } catch (err) {
        responseMessage = "Account already exists. Error signing you up";
        booleanResponse = null;
        console.log(err.stack);
        res.send("USER ALREADY EXISTS")
    }

})

app.post("/homePage",async(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;

    const actualPassword = await db.query("SELECT userpassword FROM users WHERE email=($1)",[email]);
    console.log(actualPassword.rows[0].userpassword);
    if(password === actualPassword.rows[0].userpassword){
        res.send("hi")
        console.log(`Access Granted to user ${email}`)
}
    else{
        res.send("wrong password")
        console.log(`Access Denied`)
    }});
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})
