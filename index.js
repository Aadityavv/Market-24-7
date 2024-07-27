import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt, { hash } from "bcrypt";

const app = express();
const port = 4000;
app.set('view engine', 'ejs'); // Set EJS as the view engine
const saltRounds = 10;


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

app.get("/signup",(req,res)=>{
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

    bcrypt.hash(password,saltRounds,async(err,hash)=>{
        if(err) console.log(`Error getting hash value ${err.stack}`);
        else{
            console.log(name,phno,email,hash)
            try {
                await db.query("INSERT INTO users (username, phno, email, userPassword) VALUES ($1, $2, $3, $4)", [name, phno, email, hash]);
                responseMessage = "Signed up successfully. Now you can sign in easily!";
                booleanResponse = "True";
                res.send("HI")
            } catch (err) {
                responseMessage = "Account already exists. Error signing you up";
                booleanResponse = null;
                console.log(err.stack);
                res.send("USER ALREADY EXISTS")
            }
        
        }
        })
    })

app.post("/homepage",async(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;

    try{
    const actualPassword = await db.query("SELECT userpassword FROM users WHERE email=($1)",[email]);

    const actualHashedPassword=actualPassword.rows[0].userpassword;

    console.log(actualPassword.rows[0].userpassword);

    bcrypt.compare(password,actualHashedPassword,(err,result)=>{
        if(err) {
            res.send(`Wrong password`)
        }
        else{
            if(result){
res.send("hi")            }
            else{
              res.send("Incorrect Password");
            }
          }
    })}

    catch(error){
        res.send(`User does not exist`)
        console.log(`Unknown person tried to access the website`)
    }
});
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})
