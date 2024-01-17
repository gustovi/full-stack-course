import React from "react";

export default function Filter({onChange, searchInput, content, filteredPersons}) {

    return (
        <>
            <form>
                <div>
                    filter shown with
                    <input
                        type="text"
                        placeholder="Search name"
                        onChange={onChange}
                        value={searchInput}
                    />
                </div>
                {content && <table>
                    <tbody>
                    {filteredPersons.map((person, index) => (
                        <tr key={index}>
                            <td>{person.name}</td>
                            <td>{person.number}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>}
            </form>
        </>
    )
}