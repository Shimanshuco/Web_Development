const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;


app.use(express.json());

app.get("/home", (req, res) => {
    res.send("Welcome !");
});

app.get("/search", (req, res) => {
    let serch = req.query;
    if (serch.keyword == undefined) {
        return res.send("Not specified");
    }
    res.send(`You searched for ${serch.keyword}` || "Not specified");
});

app.get("/user/:id", (req, res) => {
    let id = req.params.id;
    res.send(`Welcome user ${id}`)
})

app.post("/feedback", (req, res) => {
    let { name, message } = req.body;
    res.send(`Thanks ${name} Your feedback has been received: ${message}`)
});

app.get("/users", (req, res) => {
    let data = fs.readFileSync("user.json", "utf-8");
    const user = JSON.parse(data);
    res.json(user);
});

app.get("/users/:id", (req, res) => {
    const id = Number(req.params.id);
    let data = fs.readFileSync("user.json", "utf-8");
    const user = JSON.parse(data);
    let uid = user.find(u => u.id === id);
    if (uid) {
        res.send(uid);
    } else {
        res.send("User not found!");
    }

});

app.post("/user", (req, res) => {
    const newUser = req.body;
    const data = fs.readFileSync("user.json", "utf-8");
    const users = JSON.parse(data);
    users.push(newUser);
    fs.writeFileSync("user.json", JSON.stringify(users, null, 2));
    res.status(201).send("User added successfully!");
});

app.delete("/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const data = fs.readFileSync("user.json", "utf-8");
    const user = JSON.parse(data);
    const rest = user.filter(u => u.id !== id);
    fs.writeFileSync("user.json", JSON.stringify(rest, null, 2));
    res.send("Successfully Deleted!")
});

app.put("/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const { name, email } = req.body;
    let data = fs.readFileSync("user.json", "utf-8");
    const users = JSON.parse(data);
    let user = users.find(u => u.id === id);
    if (!user) {
        return res.status(404).send("User not found");
    }
    if (name) user.name = name;
    if (email) user.email = email;
    fs.writeFileSync("user.json", JSON.stringify(users, null, 2));
    res.send(`User with ID ${id} updated successfully!`);
});


app.get("/u/srch", (req, res) => {
    const { id, name } = req.query;
    const data = fs.readFileSync("user.json", "utf-8");
    const users = JSON.parse(data);

    let filteredUsers = users;

    if (id) {
        filteredUsers = filteredUsers.filter(u => u.id === Number(id));
    }

    if (name) {
        filteredUsers = filteredUsers.filter(u =>
            u.name.toLowerCase().includes(name.toLowerCase())
        );
    }

    if (filteredUsers.length === 0) {
        return res.status(404).json({ message: "User not found!" });
    }

    res.json(filteredUsers);
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});