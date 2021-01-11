const mongoose = require('mongoose');

//const url = 'mongodb+srv://CS:sasuke@phonebook.liwbb.mongodb.net/phonebook?retryWrites=true&w=majority'
//process.env.MONGODB_URI


console.log('connecting to', url);

mongoose.connect(process.env.MONGDB_URI, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true})
.then(result => {
    console.log('connected to MongoDB')
})
.catch((error) => {
    console.log('error conencting to MongoDB', error.message)
});

const personSchema = new mongoose.Schema({
    name: String,
    number: String,
    //id: Number
});

personSchema.set('toJSON', {
    transform: (document,returnedObject) => {
        //returnedObject.id = returnedObject.id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
});

module.exports = mongoose.model('Person',personSchema)