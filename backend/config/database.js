const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI;
const dotenv = require("dotenv");

dotenv.config();
const connectDatabase = () => {
    mongoose.set("strictQuery", false);
    mongoose.connect(`${process.env.MONGO_URI}`, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("Mongoose Connected");
        });
}

module.exports = connectDatabase;