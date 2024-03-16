
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const morgan = require('morgan');
const cors = require('cors')

app.use(cors())

app.use(bodyParser.json())
app.use(morgan(':method :url :status :response-time ms - :body'))

morgan.token('body', req => {
    return JSON.stringify(req.body)
})


let persons = [
    {
        "id": 1,
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": 2,
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": 3,
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": 4,
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
]

app.post('/api/persons', (request, response) => {
    const body = request.body;

    if (!body.name || !body.number) {
        return response.status(400).json({ error: 'Name or number is missing' });
    }

    const existingPerson = persons.find(person => person.name === body.name);
    if (existingPerson) {
        return response.status(400).json({ error: 'Name must be unique' });
    }

    const newPerson = {
        id: Math.floor(Math.random() * 1000000),
        name: body.name,
        number: body.number
    };

    persons = persons.concat(newPerson);
    response.json(newPerson);
});


app.delete('/api/persons/:id', (request, response) => {
    const id = parseInt(request.params.id);
    persons = persons.filter(person => person.id !== id);
    response.status(204).end();
});

app.get('/info', (request, response) => {
    const info = `<div><p>Phonebook has info for ${persons.length} ${persons.length === 1 ? 'person' : 'people'}</p></div><div><p>${new Date()}</p></div>`

    response.send(info)
})


app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const entry = persons.find(person => person.id === id);

    if (!entry) {
        return res.status(404).json({ error: 'Entry not found' });
    }

    res.json(entry);
});


// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`);
// });

const PORT = process.env.PORT || port
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})