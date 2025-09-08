# .env file example : 

PORT=8080 <br/>
MONGO_URI=mongodb://127.0.0.1/dbname <br/>
JWT_SECRET=yoursecretkeyhere <br/>

# Basic of Authentication
Create a file server.js and install express (npm i express) put the code in it :
```Js
const express = require("express");
const app = express();

app.use(express.json());

const user = [];

function generateToken(length = 32) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        token += chars[randomIndex];
    }

    return token;
}

app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    if (user.find(u => u.username === username)) {
        res.send("Already Existing");
        return;
    }
    user.push({
        username: username,
        password: password
    });

    res.json({
        message: "Successfully signed in!"
    })
})

app.post("/signin", (req, res) => {

    const username = req.body.username;
    const password = req.body.password;
    let foundUser = null;

    for (let i = 0; i < user.length; i++) {
        if (user[i].username == username && user[i].password == password) {
            foundUser = user[i];
        }

    }

    if (foundUser) {

        const token = generateToken();
        foundUser.token = token;
        res.json({
            token: token,
        })
    } else {
        res.status(403).send({
            message: "Invalid username or password"
        })
    }
})

app.get("/me", (req, res) => {
    const token = req.headers.token;
    let foundUser = user.find(user => user.token == token);
    if (user) {
        res.json({
            message: `Welcome${foundUser.username}`
        })
    } else {

        res.status(401).send({
            message : "Unauthorized"
        })
    }
});

app.listen(3000);
```

