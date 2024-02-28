import React from "react";

export default function Persons({persons, deleteHandler}) {
    return (
        <>
            <ul>
                {persons.map((person) => (
                    <li key={person.id}>
                        {person.name} {person.number}
                        <button onClick={ () => deleteHandler(person)}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    )
}