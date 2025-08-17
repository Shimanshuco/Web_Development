class MyPromise{
    constructor(executor){
        this.onSuccess = null;
        this.onFailure = null;
        this.state = "pending";
        this.value = null;
    

        const resolve = (value) =>{
            if(this.state==="pending"){
                this.state="fulfilled";
                this.value = value;
                if(this.onSuccess) this.onSuccess(value);
            }
        };

        const reject = (error) =>{
            if(this.state==="pending"){
                this.state="rejected";
                this.value=error;
                if(this.onFailure) this.onFailure(error);
            }
        };

        try{
            executor(resolve,reject);
        }catch(err){
            reject(err);
        }
}

        then(callback){
            this.onSuccess = callback;
            if(this.state==="fulfilled"){
                callback(this.value);
            }
            return this;
        }

        catch(callback){
            this.onFailure = callback;
            if(this.state==="rejected"){
                callback(this.value);
            }
            return this;    
        }
}   

let Mypromise =  new MyPromise((resolve , reject)=>{
    let succes = true;
    if(succes){
        resolve("Successfull");
    }else{
        reject("Failed")
    }
});

Mypromise
.then(success => console.log("THEN : "+success))
.catch(error => console.log("CATCH : "+error));