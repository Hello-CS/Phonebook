const { response } = require('express')
const express = require('express')
const { body } = require('express-validator')
const app = express()
const morgan = require('morgan')
const cors = require('cors')

let persons = [
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
]

app.use(cors())
app.use(express.json())

morgan.token('body', (req,res) => JSON.stringify(req.body));
app.use(morgan(':method :url :status - :response-time ms :body'))

app.get('/api/persons', (req,res) => {
    res.json(persons)
});

app.get('/info', (req,res) => {
    res.send(`
    <div>Phonebook has ${persons.length} people</div>
    <div>${Date()}</div>`)
});

app.get('/api/persons/:id', (req,res) => {
    const id = Number(req.params.id)
    const person = persons.find(person => person.id === id)
    if (person) {
        res.json(person)
    } else {
        res.status(404).end()
    }    
});

app.delete('/api/persons/:id', (req,res) => {
    const id = Number(req.params.id)
    const person = persons.find(person => person.id === id)
    res.status(204).end()
});

const generateId = () => {
    const maxId = persons.length > 0
    ? Math.max(...persons.map(person => person.id))
    : 0
    return maxId + 1
}

app.post('/api/persons', (req,res) => {
    const body = req.body
    if (!body.name || !body.number) {
        return res.status(400).json({
            error: 'name/number is missing'
        });
    };

    if (persons.find(person => person.name === body.name)) {
        return res.status(400).json({
            error: 'name already exists in phonebook'
        });
    };

    const person = {
        name: body.name,
        number: body.number,
        id: generateId()
    }

    persons = persons.concat(person)

    res.json(person)
});

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});