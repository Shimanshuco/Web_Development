const express= require("express");
const app = express();

//A middleware that logs the request and url
function infoMiddleware(req,res,next){
    console.log(`The request is : ${req.method}`);
    console.log(`Host is : ${req.hostname}`);
    console.log(`The url is : ${req.url}`);
    console.log(`Current time : ${new Date()}`);
}

app.use(infoMiddleware);

app.get("/",(req,res)=>{
    res.send("Hello World!");
});

app.listen(3000);