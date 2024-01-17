import React, {useState} from 'react';
import Filter from "./components/Filter.jsx";
import PersonForm from "./components/PersonForm.jsx";
import Persons from "./components/Persons.jsx";

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas', number: '040-123456', id: 1},
        {name: 'Ada Lovelace', number: '39-44-5323523', id: 2},
        {name: 'Dan Abramov', number: '12-43-234345', id: 3},
        {name: 'Mary Poppendieck', number: '39-23-6423122', id: 4}
    ]);
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [searchInput, setSearchInput] = useState('');

    const handleSearch = (e) => {
        setSearchInput(e.target.value);
    };

    const filteredPersons = persons.filter((person) =>
        person.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    const handleAddName = () => {
        const person = {
            name: newName,
            number: newNumber,
            id: persons.length + 1
        };
        setPersons([...persons, person]);
        setNewName('');
        setNewNumber('');
    };

    const handleNameChange = (event) => {
        setNewName(event.target.value);
    };

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value);
    };

    const checkName = () => {
        const isNameExist = persons.some((person) => person.name === newName);
        if (isNameExist) {
            alert(`${newName} is already added to the phonebook`);
        } else {
            handleAddName();
        }
    };

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter
                onChange={handleSearch}
                searchInput={searchInput}
                content={searchInput}
                filteredPersons={filteredPersons}
            />
            <h3>add a new</h3>
           <PersonForm
               checkName={checkName}
               newName={newName}
               handleNameChange={handleNameChange}
               handleNumberChange={handleNumberChange}
               newNumber={newNumber}
           />
            <h3>Numbers</h3>
           <Persons persons={persons}/>
        </div>
    );
};

export default App;
