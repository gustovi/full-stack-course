import React from "react";

export default function PersonForm({newName, handleNameChange, newNumber, handleNumberChange, checkName}) {
    return (
        <>
            <form>
                <div>
                    name:
                    <input
                        type="text"
                        value={newName}
                        onChange={handleNameChange}
                    />
                </div>
                <div>
                    number:
                    <input
                        type="text"
                        value={newNumber}
                        onChange={handleNumberChange}
                    />
                </div>
                <div>
                    <button
                        type="button"
                        onClick={checkName}
                    >
                        add
                    </button>
                </div>
            </form>
        </>
    )
}