const path = require('path')
require('dotenv').config({path: path.resolve(__dirname,'./.env')})
const { response } = require('express')
const express = require('express')
const { body } = require('express-validator')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')

/*let persons = [
    { 
        "name": "Arto Hellas", 
        "number": "040-123456",
        "id": 1
        },
    { 
        "name": "Ada Lovelace", 
        "number": "39-44-5323523",
        "id": 2
        },
    { 
        "name": "Dan Abramov", 
        "number": "12-43-234345",
        "id": 3
        },
    { 
        "name": "Mary Poppendieck", 
        "number": "39-23-6423122",
        "id": 4
    }
] */

app.use(express.static('build'))
app.use(cors())
app.use(express.json())

morgan.token('body', (req,res) => JSON.stringify(req.body));
app.use(morgan(':method :url :status - :response-time ms :body'))

app.get('/api/persons', (req,res) => {
    Person.find({}).then(persons => {
        res.json(persons)
    });
});

/*app.get('/info', (req,res) => {
    res.send(`
    <div>Phonebook has ${persons.length} people</div>
    <div>${Date()}</div>`)
}); */

app.get('/api/persons/:id', (req,res) => {
    Person.findById(req.params.id).then(person => {
        res.json(person)
    });
});

app.delete('/api/persons/:id', (req,res) => {
    Person.findById(req.params.id).then(person => {
        res.status(204).end()
    })
});

/*const generateId = () => {
    const maxId = Person.length > 0
    ? Math.max(...Person.map(person => person.id))
    : 0
    return maxId + 1
} */

app.post('/api/persons', (req,res) => {
    const body = req.body
    if (!body.name || !body.number) {
        return res.status(400).json({
            error: 'name/number is missing'
        });
    };

   /* if (Person.find(person => person.name === body.name)) {
        return res.status(400).json({
            error: 'name already exists in phonebook'
        });
    }; */
    

    const person = new Person({
        name: body.name,
        number: body.number,
        //id: generateId()
    })

    person.save().then(savedPerson => {
        res.json(savedPerson)
    });
});

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});