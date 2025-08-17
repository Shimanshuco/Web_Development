// //Code 1
// function waitfor3s(resolve){
//     // console.log("Resolve is",resolve);
//     setTimeout(resolve , 3000);
// }
// function main(){
//     console.log("Hello i am a main function!")
// }

// waitfor3s(main);



//Code 2
function setTimeoutPromisefied(ms){
    // let p = new Promise();   //An empty promise 
    // let p = new Promise(waitfor3s);    //#
    // let p = new Promise(resolve => setTimeout(resolve , ms)); 
    return p;  //Object of a promise class
}

function callback(){
    console.log("3seconds done!");
}

let retu = setTimeoutPromisefied(3000).then(callback);
// let retu2 = setTimeoutPromisefied().then(main);    //#
console.log(retu);




//What promise class does
// function Promisefuncn(){
//     return new Promise(function(resolve){
//         resolve() 
//     })
// }