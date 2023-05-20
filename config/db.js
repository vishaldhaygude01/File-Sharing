require('dotenv').config();
const mongoose = require('mongoose');



function connectDB() {
    mongoose.connect(process.env.MONGO_CONNECTION_URL, {
        useNewUrlParser: true,
        // useCreateIndex: true,
        useUnifiedTopology: true
    });
    const connection = mongoose.connection;


    connection.once('open', () => {
        console.log('Database Connected')
    });
    connection.on('error', () => {
        console.log('Connection failed')
    })
}

module.exports = connectDB;