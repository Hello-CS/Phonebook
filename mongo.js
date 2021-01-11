const mongoose = require('mongoose');
const password = process.argv[2];
const name = process.argv[3];
const number = process.argv[4];

if (process.argv.length < 3) {
    console.log ('Please provide the password as an argument: node mongo.js <password>')
    process.exit(1)
}

const url = `mongodb+srv://CS:${password}@phonebook.liwbb.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true});

const personSchema = new mongoose.Schema({
    name: String,
    number: String,
    id: Number
});

const Person = mongoose.model('Person', personSchema);

const person = new Person({
    "name": name, 
    "number": number
})

if (process.argv[3] !== undefined && process.argv[4] !== undefined) {
    person.save().then(result => {
        console.log('person saved');
        mongoose.connection.close();
    });
};


if (!process.argv[3] && !process.argv[4]) {
    console.log('phonebook:');
    Person.find({}).then(result => {
        result.forEach(person => {
            console.log(person.name, person.number)
        });
        mongoose.connection.close();
        process.exit(1);
    });
};

/* Person.find({}).then(result => {
    result.forEach(person => {
        console.log(person)
    });
    mongoose.connection.close()
})
*/