import React from "react";

export default function Persons({persons}) {
    return (
        <>
            <ul>
                {persons.map((person) => (
                    <li key={person.id}>
                        {person.name} {person.number}
                    </li>
                ))}
            </ul>
        </>
    )
}