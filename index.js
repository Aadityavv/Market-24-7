import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

const app = express();
const port = 3000;
app.set('view engine', 'ejs'); // Set EJS as the view engine
const saltRounds = 10;

let responseMessage = "";
let booleanResponse = null;

// Mongoose connection setup
mongoose.connect("mongodb://localhost:27017/Market_24_7")

    .then(() => {
        console.log("Connected to MongoDB successfully");
        responseMessage = "Database connected successfully!";
    })
    .catch(err => {
        console.log(`Error connecting to MongoDB: ${err.stack}`);
        responseMessage = "Error connecting to the database.";
    });

// Define a User schema
const userSchema = new mongoose.Schema({
    username: String,
    phno: Number,
    email: String,
    userPassword: String
});

// Create a User model based on the schema
const User = mongoose.model('User', userSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("login.ejs");
});

app.get("/signup", (req, res) => {
    res.render("signUP.ejs");
});

app.get("/signIN", (req, res) => {
    res.render("signIN.ejs");
});

app.post("/SignedUP", async (req, res) => {
    const { name, phno, email, password } = req.body;

    bcrypt.hash(password, saltRounds, async (err, hash) => {
        if (err) {
            console.log(`Error getting hash value: ${err.stack}`);
        } else {
            try {
                const newUser = new User({
                    username: name,
                    phno: phno,
                    email: email,
                    userPassword: hash
                });

                await newUser.save();
                responseMessage = "Signed up successfully. Now you can sign in easily!";
                booleanResponse = true;
                res.send("Signed up successfully!");
            } catch (err) {
                responseMessage = "Account already exists. Error signing you up.";
                booleanResponse = null;
                console.log(err.stack);
                res.send("User already exists.");
            }
        }
    });
});

app.post("/homepage", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email: email });

        if (user) {
            const result = await bcrypt.compare(password, user.userPassword);

            if (result) {
                res.send("Login successful");
            } else {
                res.send("Incorrect Password");
            }
        } else {
            res.send("User does not exist");
            console.log("Unknown person tried to access the website");
        }
    } catch (error) {
        console.log(`Error during login: ${error.stack}`);
        res.send("An error occurred during login");
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
