// //Code 1
// function random(){

// }

// let p = new Promise(random); //Supposed to  return us something eventually
// console.log(p);



//Code 2
// function random(resolve){ //resolve is also a function
//     resolve();
// }

// let p = new Promise(random); //Supposed to  return us something eventually
// console.log(p);

// //using the eventual value returned by the promise
// function callback(){
//     console.log("Promise successfull");
// }

// p.then(callback);



//Code 3
function random(resolve){ //resolve is also a function
    setTimeout(resolve,3000)
}

let p = new Promise(random); //Supposed to  return us something eventually
console.log(p);

//using the eventual value returned by the promise
function callback(){
    console.log("Promise successfull");
}

p.then(callback);