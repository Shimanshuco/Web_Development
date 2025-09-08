const express = require("express");
const app = express();
const jwt =  require("jsonwebtoken");
const JWT_SECRET = "himanshuloves";
app.use(express.json());


const user = [];
 

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

        const token = jwt.sign({
            username : username
        },JWT_SECRET);
        // foundUser.token = token;   //No need to store now
        res.json({
            token: token,
        })
    } else {
        res.status(403).send({
            message: "Invalid username or password"
        });
    };
});

app.get("/me", (req, res) => {
    const token = req.headers.token;

    try {
        const decodedInfo = jwt.verify(token, JWT_SECRET);
        const username = decodedInfo.username;

        const foundUser = user.find(u => u.username === username);

        if (foundUser) {
            res.json({
                message: `Welcome ${foundUser.username}`
            });
        } else {
            res.status(401).send({
                message: "User not found"
            });
        }

    } catch (err) {
        res.status(401).send({
            message: "Invalid token"
        });
    }
});


app.listen(3000);