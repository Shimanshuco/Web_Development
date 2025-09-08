const express = require("express");
const app = express();
const fs = require("fs");
const port = 8080;

app.get("/", (req, res) => {
    res.send("<center><h1>🏠 Welcome to our restaurant!</h1></center>")
})

app.get("/menu", (Req, res) => {
    const data = fs.readFileSync("menu.json", "utf-8");
    res.json(JSON.parse(data));
})

app.get("/order", (req, res) => {
    const { item, size, extra, table } = req.query;

    
    res.write(`
    Order Received:<br>
    Item: ${item || "Not specified"}<br>
    Size: ${size || "Regular"}<br>
    Extra: ${extra || "None"}<br>
    Table: ${table || "Counter"}<br><br>
    Preparing your order... Please wait.<br>
  `);


    setTimeout(() => {
        res.write(`
       Food is ready!<br>
      Your ${size || "Regular"} ${item || "Food"} with ${extra || "no extras"} is on the way to Table ${table || "Counter"}.
    `);

        res.end();
    }, 3000);
});

app.get("/contact", (req, res) => {
  res.send(" Contact us at 123-456-7890");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
