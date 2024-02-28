import React from "react";

export default function Filter({onChange, searchInput, content, filteredCountries}) {

    return (
        <>
            <form>
                <div>
                    find countries
                    <input
                        type="text"
                        placeholder="Search country"
                        onChange={onChange}
                        value={searchInput}
                    />
                </div>
                {content && <table>
                    <tbody>
                    {filteredCountries.map((country, index) => (
                        <tr key={index}>
                            <td>{country.name}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>}
            </form>
        </>
    )
}