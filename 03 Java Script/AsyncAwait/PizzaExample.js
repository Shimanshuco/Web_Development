// Simulated async function that returns a promise
function getPizza() {
    return new Promise((resolve, reject) => {
        let isPizzaReady = true;
        if (isPizzaReady) {
            resolve("Here is your Pizza");
        } else {
            reject("No pizza today");
        }
    });
}

// Async function using await
(async function orderPizza() {
    try {
        let data = await getPizza();
        console.log("Success : " + data);
    } catch (error) {
        console.log("Failure : " + error);
    }
})();

//Internally async await is promise only
// function orderPizza(){
//     return getPizza()
//     .then((pizz)=>{
//         console.log(pizza);
//     })
//     .catch((err)=>{
//         console.log("No pizza");
//     })
// }


// //Promise

// let pizaPromise = new Promise(function (resolve, reject) {
//     let isPizzaReady = true;

//     if (isPizzaReady) {
//         resolve("Here is your Pizza");
//     } else {
//         reject("No pizza today");
//     }
// });

// pizaPromise
//     .then(function (result) {
//         console.log("Success : " + result);
//     })
//     .catch(function (error) {
//         console.log("Failure : " + error)
//     });


