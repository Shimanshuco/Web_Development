function sum(a,b){
    s = a+b;
    console.log(typeof(a));
    console.log(typeof(b));
    return sum;
}

let res1 = sum(5,6); //11 ->Here a and b both are number
let res2 = sum("Himanshu",5); //Himanshu5 ->Here a is string and b is number
let res3 = sum("Himanshu","Singh"); //HimanshuSingh ->Here both are string