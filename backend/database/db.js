const mongoose = require('mongoose');
const { MONGO_URL } = process.env;

exports.connect = () => {
    mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=>{
        console.log('successfully connected to database')
    })
    .catch((err)=>{
        console.log(`An error find while connceting to database ${err}`)
    })
};