const mongoose = require('mongoose')
const config = require('config')
const db = config.get('mongoURI')

// conneect to the database that will give us back a promise
const connectDB = async () => {
    try {
        // since mongoose.connect() returns 
        // a promise we need to have await in front of it
        await mongoose.connect(db, {
            // to avoid depracation warmings
            useUnifiedTopology: true,
            useNewUrlParser: true
        });

        console.log('MongoDB Connected...')
    } catch (err) {
        console.error(err.message);
        // Exit process is fails
        process.exit(1);
    }
}

module.exports = connectDB;