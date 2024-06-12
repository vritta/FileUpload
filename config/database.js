const mongoose = require("mongoose");

require("dotenv");

dbConnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=>{console.log("Database connected successfully.")})
    .catch((err)=>{
        console.log("Sorry, DB Connection Issue Occured!!!");
        console.error(err);
        process.exit(1);
    });
}

module.exports = dbConnect;