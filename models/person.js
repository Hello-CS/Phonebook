const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

console.log('connecting to', process.env.MONGODB_URI);

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true})
.then(result => {
    console.log('connected to MongoDB')
})
.catch((error) => {
    console.log('error connecting to MongoDB', error.message)
});

const personSchema = new mongoose.Schema({
    name: {type:String, unique: true},
    number: String
});

personSchema.plugin(uniqueValidator)

personSchema.set('toJSON', {
    transform: (document,returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
});

module.exports = mongoose.model('Person',personSchema)