// let example = new Date(year, month, day, hours, minutes, seconds, milliseconds)

// let example = new Date(year, month)

// let example = new Date(milliseonds)

// let example = new Date("October 13, 2014 11:13")


let d = new Date(2020, 0, 11, 20)

let updatedDate = d.setFullYear(2000)

console.log(updatedDate)



let today = new Date();

console.log("Date methods demo:");
console.log("getDate:", today.getDate());
console.log("getDay:", today.getDay());
console.log("getFullYear:", today.getFullYear());
console.log("getHours:", today.getHours());
console.log("getMilliseconds:", today.getMilliseconds());
console.log("getMinutes:", today.getMinutes());
console.log("getMonth:", today.getMonth());
console.log("getSeconds:", today.getSeconds());
console.log("getTime:", today.getTime());
console.log("getTimezoneOffset:", today.getTimezoneOffset());
console.log("getUTCDate:", today.getUTCDate());
console.log("getUTCDay:", today.getUTCDay());
console.log("getUTCFullYear:", today.getUTCFullYear());
console.log("getUTCHours:", today.getUTCHours());
console.log("getUTCMilliseconds:", today.getUTCMilliseconds());
console.log("getUTCMinutes:", today.getUTCMinutes());
console.log("getUTCMonth:", today.getUTCMonth());
console.log("getUTCSeconds:", today.getUTCSeconds());

console.log("toDateString:", today.toDateString());
console.log("toISOString:", today.toISOString());
console.log("toJSON:", today.toJSON());
console.log("toLocaleDateString:", today.toLocaleDateString());
console.log("toLocaleString:", today.toLocaleString());
console.log("toLocaleTimeString:", today.toLocaleTimeString());
console.log("toString:", today.toString());
console.log("toTimeString:", today.toTimeString());
console.log("toUTCString:", today.toUTCString());
console.log("valueOf:", today.valueOf());


