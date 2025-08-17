function check(arr){
    let arr2=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i].gender ==="male" && arr[i].age>18){
            arr2.push(arr[i]);
        }
        if(arr[i].gender ==="female" && arr[i].age>18){
            arr2.push(arr[i]);
        }
    }
    return arr2;
}

const arr = [{
    name:"Himanshu",
    gender:"male",
    age:20
},
{
    name:"Kapil",
    gender:"male",
    age:19
},
{
    name:"Dhaka",
    gender:"male",
    age:17
},
{
    name:"Anjali",
    gender:"female",
    age:21
},
{
    name:"Aaradhya",
    gender:"female",
    age:16
}
];
let result = check(arr);
console.log("People above 18",result);

//Output:
// People above 18 [
//   { name: 'Himanshu', gender: 'male', age: 20 },
//   { name: 'Kapil', gender: 'male', age: 19 },
//   { name: 'Anjali', gender: 'female', age: 21 }
// ]