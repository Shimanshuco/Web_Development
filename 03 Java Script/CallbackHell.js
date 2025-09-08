//CallbackHell
//Code 1
// setTimeout(function(){
//     console.log("hello");
//     setTimeout(function(){
//         console.log("Hi");
//         setTimeout(function(){
//             console.log("I am a callback Hell!");
//         },5000)
//     },3000);
// },1000);

//Alternative way - more clean
//Code-2
// function step3(){
//     console.log("Level3");
// }
// function step2(){
//     console.log("Level2");
//     setTimeout(step3 , 5000);
// }
// function step1(){
//     console.log("Level1");
//     setTimeout(step2 , 3000);
// }
// setTimeout(step1 , 1000);

//Promisified Version
//Code-3
function setTimeoutPromisified(duration){
    return new Promise(function(resolve){
        setTimeout(resolve , duration);
    });
};

//Method-1 Promising chaining
// setTimeoutPromisified(1000).then(function (){
//     console.log("Level1");
//     setTimeoutPromisified(3000).then(function(){
//         console.log("Level2");
//             setTimeoutPromisified(5000).then(function(){
//                 console.log("Level 3")
//         });
//     });
// });

//Method-2 Promising chaining
setTimeoutPromisified(1000).then(function (){
    console.log("Level1");
    return setTimeoutPromisified(3000)
}).then(function(){
    console.log("Level2");
    return setTimeoutPromisified(5000)
}).then(function(){
    console.log("Level 3")
});