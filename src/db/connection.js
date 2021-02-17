const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/RestApi', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('mongodb connected');
}).catch((e) => {
    console.log('no connection');
})