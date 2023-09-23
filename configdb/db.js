const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('connected to MongoDb');
    } catch (error) {
        console.log(`mongo connect error${error}`)
    }
}

module.exports = connectDB;