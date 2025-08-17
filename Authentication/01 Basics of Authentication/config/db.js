const mongoose = require('mongoose');

const initialize = () => {
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>
        console.log("Connected")
    )
    .catch((err)=>
        console.log("ERROR IS : ",err)
    )
};

module.exports = initialize;
