const express= require("express");
const app = express();

//Middleware
let reqCount = 0;

//Method-1
function countRequest(){
    reqCount++;
    console.log(`Total request : ${reqCount}`);
}


app.get("/home1", (req,res)=>{
    countRequest();
    res.send("Hello wordl!")
})

//Method-2
function countRequestMiddleware(req, res, next) {
  reqCount++;
  console.log(`Total requests: ${reqCount}`);
  next(); 
}


app.get("/home2", countRequestMiddleware, (req, res) => {
  res.send("Hello world!");
});


//Method-3
app.use((req, res, next) => {
  reqCount++;
  console.log(`Total requests: ${reqCount}`);
  next(); 
});

app.get("/home3", (req, res) => {
  res.send("Hello world!");
});


app.listen(3000);