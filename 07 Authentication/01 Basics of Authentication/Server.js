const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

//Routes
const authRouter = require("./routes/authRouter");
const authMiddleware = require("./middleware/auth");

//Db
const init  = require("./config/db");
init();

app.use(express.json());

app.use("/api", authRouter);


app.get("/", authMiddleware , (req, res) => res.send("Server running!"));

const PORT = process.env.PORT || 8000; 
app.listen(PORT , () =>{
    console.log(`App running on ${PORT}`);
});