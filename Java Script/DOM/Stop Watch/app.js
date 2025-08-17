//Fetching element 
const num = document.querySelector("#num");
const head = document.querySelector("#head");

//Updating Element
let nums = parseInt(num.innerText);
function update(){
    nums=nums+1;
    num.innerText = nums;
    
}


setInterval(update , 1000);

//Deleting element
function deleteHead(){
    head.parentNode.removeChild(head);
}

setTimeout(function(){ 
    deleteHead();
},1000);

//Add elements
function addChild(){
    let divel = document.createElement("div");
    divel.innerHTML = "<center><h1>Stop watch Started</h1></center>";
    document.querySelector("#add").appendChild(divel);
}

setTimeout(function(){
    addChild();
},1000);