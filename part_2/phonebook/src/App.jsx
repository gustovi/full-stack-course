import React, {useEffect, useState} from 'react';
import Filter from "./components/Filter.jsx";
import PersonForm from "./components/PersonForm.jsx";
import Persons from "./components/Persons.jsx";
import personService from './services/personService.js'
import Notification from "./components/Notification.jsx";



const App = () => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [searchInput, setSearchInput] = useState('');
    const [notification, setNotification] = useState('')
    const [error, setError] = useState(false)

    useEffect( () => {
        const fetchData = async () => await getAllPersons()
        fetchData()
    }, []);

    const filteredPersons = persons.filter((person) =>
        person.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    const notify = (message, error = false, displayTimeInSeconds = 5)  => {
        setNotification( message)
        setError(error)
        setTimeout(() => {
            setNotification(null)
            setError(false)
        }, displayTimeInSeconds * 1000)
    }

    const deletePerson = async person => {
        if (confirm(`delete ${person.name}`)) {
            try {
                await personService.remove(person.id)
                setPersons(persons.filter(p => p !== person))
                notify(`Note: '${person.name}' was deleted`)
            } catch (err) {
                if (err.response?.status === 404) {
                    notify(`Person ${person.name} was not found on the server`, true)
                } else {
                    notify(`An error happened deleting person ${person.name}`, true)
                }
            }
        }
    }

    const savePerson = async person => {
        const data = await personService.create(person)
        setPersons([...persons, data])
        setNewName('')
        setNewNumber('')
        notify( `Note: New person '${person.name}' was added`)
    };

    const updatePerson = async person => {
        try {
            await personService.update(person)
        } catch (err) {
            console.log(err)
        }
        setPersons([...persons])
        notify( `Note: '${person.name}' number was changed`)
    }

    const getAllPersons = async () => {
        const data = await personService.getAll()
        setPersons(data)
    }

    const saveOrUpdatePerson = async () => {
        const person = persons.find((person) => person.name === newName);
        if (person !== undefined) {
            if (confirm(`${person.name} is already added to phonebook, replace the old number with a new one?`)) {
                person.number = newNumber
                await updatePerson(person)
            }
        } else {
            await savePerson( {
                name: newName,
                number: newNumber,
            });
        }
    };

    const handleNameChange = (event) => {
        setNewName(event.target.value);
    };

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value);
    };

    const handleSearch = (e) => {
        setSearchInput(e.target.value);
    };

    return (
        <div>
            <h2>Phonebook</h2>
            <Notification  message={notification} error={error}/>
            <Filter
                onChange={handleSearch}
                searchInput={searchInput}
                content={searchInput}
                filteredPersons={filteredPersons}
            />
            <h3>add a new</h3>
            <PersonForm
                checkName={saveOrUpdatePerson}
                newName={newName}
                handleNameChange={handleNameChange}
                handleNumberChange={handleNumberChange}
                newNumber={newNumber}
            />
            <h3>Numbers</h3>
            <Persons persons={persons} deleteHandler={deletePerson}/>
        </div>
    );
};

export default App;
