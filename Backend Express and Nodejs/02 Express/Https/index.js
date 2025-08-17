//Creating a HTTPS server
const express = require("express");
const app = express();

// app.get("/add",(req,res)=>{
//     const a = req.query.a;
//     const b = req.query.b;
//     res.send(`The sum is ${a+b}`);  //The sum is 56  --> a and b are strings
// });

// => /add?a=val&b=val
app.get("/add",(req,res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.a);
    res.send(`The sum is ${a+b}`);  
});

app.get("/substract",(req,res)=>{
    const a = req.query.a;
    const b = req.query.b;
    res.send(`The sum is ${a-b}`); 
});

app.get("/multiply",(req,res)=>{
    const a = req.query.a;
    const b = req.query.b;
    res.send(`The sum is ${a*b}`); 
});

app.get("/divide",(req,res)=>{
    const a = req.query.a;
    const b = req.query.b;
    res.send(`The sum is ${a/b}`); 
});


//now => add/:a/:b
app.get("/add/:a/:b",(req,res)=>{
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.a);
    res.send(`The sum is ${a+b}`);  
});

app.listen(3000);