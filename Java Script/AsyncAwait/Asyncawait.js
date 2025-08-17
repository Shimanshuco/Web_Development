function setTimeoutPromisified(ms){
    return new Promise(resolve => setTimeout(resolve , ms));
};

async function solve(){
    await setTimeoutPromisified(1000);
    console.log("Level1");
    await setTimeoutPromisified(3000);
    console.log("Level2");
    await setTimeoutPromisified(5000);
    console.log("Level3");
};
solve();