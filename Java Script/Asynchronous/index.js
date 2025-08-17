const fs = require("fs");

//Synchronous
console.log("Synchronous");
const content = fs.readFileSync("a.txt","utf-8");
console.log(content);

const content2 = fs.readFileSync("b.txt", "utf-8");
console.log(content2);

const content3 = fs.readFileSync("b.txt","utf-8");
console.log(content3);

console.log("DONE !");

//Output
// Helo i am a big para this is written by himanshu kumar singh.
// Helo i am a short para.
// Helo i am a short para.
// DONE !

//Asynchronous
console.log("ASynchronous");
function read(err , data){
    console.log(data);
}

fs.readFile("a.txt","utf-8",read);
fs.readFile("b.txt","utf-8",read);

console.log("Done!");

//Output
// Done!
// Helo i am a big para this is written by himanshu kumar singh.
// Helo i am a short para.
