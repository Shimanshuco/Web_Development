let pizaPromise = new Promise(function(resolve , reject){
    let isPizzaReady = true;

    if(isPizzaReady){
        resolve("Here is your Pizza");
    }else{
        reject("No pizza today");
    }
});

pizaPromise
    .then(function(result){
        console.log("Success : "+result);
    })
    .catch(function(error){
        console.log("Failure : "+ error)
    });






let promise = new Promise((resolve, reject)=>{
    let success = true;

    if(success){
        resolve("Data loaded");
    }else{
        reject("Data failed!");
    }
});

promise 
    .then((data)=>{
        console.log("THEN :"+data);
    })
    .catch((err)=>{
        console.log("CATCH :"+err);
    })


// function onSuccess(data){
//     console.log("Success ",data);
// }
// function onError(error){
//     console.log("Failure ",error);
// }

// Promise.then(onSuccess).catch(onError)


const myPromise = new Promise((yes, no)=>{
    let succes = true;
    if(succes){
        yes("It worked!");
    }else{
        no("It failed!")
    }
});

myPromise
    .then(result => console.log("THEN : "+result))
    .catch(error => console.log("CATCH : "+error));