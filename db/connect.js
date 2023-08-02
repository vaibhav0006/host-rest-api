const mongoose = require('mongoose')


//mongoose.connect(uri, options, callback);
const connectDB = (uri) =>{
    return mongoose.connect(uri,{
        useNewUrlParser : true,
        UseUnifiedTopology : true,
    })
}

module.exports = connectDB;