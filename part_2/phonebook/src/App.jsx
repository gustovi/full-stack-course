import React, {useState, useEffect} from 'react';
import Filter from "./components/Filter.jsx";
import PersonForm from "./components/PersonForm.jsx";
import Persons from "./components/Persons.jsx";
import axios from "axios";



const App = () => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
        axios
            .get('http://localhost:3001/persons')
            .then(response => {
                setPersons(response.data)
            })
    }, [])

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
