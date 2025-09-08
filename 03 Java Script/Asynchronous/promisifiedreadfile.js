const fs = require("fs");

function readfile(readfileValue){
    fs.readFile("a.txt","utf-8",function(err, data){
        readfileValue(data);
        
    });
}

let p = new Promise(readfile);
console.log(p);

function callback(content){
    console.log(content);
}
p.then(callback);