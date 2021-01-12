require('dotenv').config({path:__dirname + '/.env'})
const { response } = require('express')
const express = require('express')
const { body } = require('express-validator')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')

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

app.get('/api/persons/:id', (req,res, next) => {
    Person.findById(req.params.id).then(person => {
        if (person) {
            res.json(person)
        } else {
            res.status(404).end()
        }
    })
    .catch(error => next(error))
});

/*app.put('/api/persons', (req , res, next) => {
    const body = req.body
    Person.findOneAndUpdate({name:body.name},{number:body.number})
    .then(result => {
        res.status(204).end()
    })
    .catch(error => next(error))
}); */    
    

app.delete('/api/persons/:id', (req,res) => {
    Person.findByIdAndRemove(req.params.id)
    .then(result => {
        res.status(204).end()
    })
    .catch(error => next(error))
});

app.post('/api/persons', (req,res) => {
    console.log(req)
    const body = req.body
    console.log(body)
    if (!body.name || !body.number) {
        return res.status(400).json({
            error: 'name/number is missing'
        });
    };

    const person = new Person({
        name: body.name,
        number: body.number
    })

    person.save().then(savedPerson => {
        res.json(savedPerson)
    })
    .catch(error => next(error))
});

const unknownEndpoint = (req,res) => {
    res.status(404).send({error: 'unknown endpoint'})
}

app.use(unknownEndpoint)

const errorHandler = (error, req, res, next) => {
    console.error(error.message)
    if (error.name === 'CastError') {
        return res.status(400).send({error: 'malformatted id'})
    } else if (error.name === 'ValidationError') {
        return res.status(400).json({ error:error.message})
    }
    next(error)
}
app.use(errorHandler)


const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});

/*
Things to try:
Stop useEffect infinite GET request
Implement Update via ID for FE and BE
*/