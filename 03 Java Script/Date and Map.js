//Classes

//Date
const date = new Date();
console.log("Date",date);
console.log("Month",date.getMonth());  // 0 =>January 11=>December
console.log("Year", date.getFullYear());

//Map
const map = new Map();
map.set("Name","Himanshu");
map.set("age",20)
console.log(map);
console.log(map.get('Name'));