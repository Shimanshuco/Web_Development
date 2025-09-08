const express = require("express");
const app = express();
const port = 3000;

// Middleware 1: Ticket Check
function checkTicket(req, res, next) {
  if (!req.query.ticket) {
    return res.send("No ticket found.");
  }
  next();
}

// Middleware 2: Security Check
function securityCheck(req, res, next) {
  if (req.query.bag === "knife") {
    return res.send("Access Denied: Prohibited item in bag.");
  }
  next();
}

// Middleware 3: Immigration Check
function immigrationCheck(req, res, next) {
  if (req.query.passport !== "valid") {
    return res.send("Access Denied: Invalid passport.");
  }
  next();
}

// Final handler (boarding)
app.get("/", checkTicket, securityCheck, immigrationCheck, (req, res) => {
  res.send("All clear! Welcome aboard ✈️");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
