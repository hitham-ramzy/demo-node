const mongoose = require('mongoose');

const MONGO_URL = 'mongodb://localhost:27017/demo_mongo';

mongoose.connect(MONGO_URL, {useNewUrlParser: true}, (err) => {
    if (!err) {
        console.log('MongoDB connection succeeded');
    } else {
        console.log('MongoDB connection failed');
    }
});

module.exports = mongoose;
