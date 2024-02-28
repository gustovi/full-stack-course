import {useEffect, useState} from "react";
import Note from "./components/Note.jsx";
import noteService from './services/notes'
import Notification from "./components/Notification.jsx";


const Footer = () => {
    const footerStyle = {
        color: 'green',
        fontStyle: 'italic',
        fontsize: 16
    }
    return (
        <div style={footerStyle}>
            <br />
            <em>Note app, Department of Computer Science, University of Helsinki 2023</em>
        </div>
    )
}

const App = () => {
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState('')
    const [showAll, setShowAll] = useState(true)
    const [errorMessage, setErrorMessage] = useState('some error hapened...')


    useEffect(() => {
        noteService
            .getAll()
            .then(initialNotes => {
                setNotes(initialNotes)
            })

    }, [])


    // useEffect(() => {
    //     axios
    //         .get('http://localhost:3001/notes/')
    //         .then(response => {
    //             setNotes(response.data)
    //         })
    // }, [])


    const toggleImportanceOf = id => {
        const url = `http://localhost:3001/notes/${id}`
        const note = notes.find(n => n.id === id)
        const changedNote = {...note, important: !note.important}

        noteService
            .update(id, changedNote)
            .then(returnedNote => {
                setNotes([...notes.filter(n => n.id !== id), returnedNote])
            })
            .catch(error => {
                setErrorMessage(
                    `Note '${note.content}' was already deleted from server`
                )
                setTimeout(() => {
                    setErrorMessage(null)
                }, 5000)
                setNotes(notes.filter(n => n.id !== id))
            })

        //
        // axios
        //     .put(url, changedNote)
        //     .then(response => {
        //     setNotes(notes.map(n => n.id !== id ? n : response.data))
        // })
    }


    const addNote = (event) => {
        event.preventDefault()
        const noteObject = {
            content: newNote,
            important: Math.random() < 0.5,

        }

        noteService
            .create(noteObject)
            .then(returnedNote => {
                setNotes(notes.concat(returnedNote))
                setNewNote('')

            })
    }
    // axios
    //     .post('http://localhost:3001/notes', noteObject)
    //     .then(response => {
    //         console.log(response)
    //         setNotes(notes.concat(response.data))
    //         setNewNote('')
    //     })


    const handleNoteChange = (event) => {
        console.log(event.target.value)
        setNewNote(event.target.value)
    }

    const notesToShow = showAll
        ? notes
        : notes.filter(note => note.important === true)

    return (
        <div>
            <h1>Notes</h1>
            <Notification message={errorMessage}/>
            <div>
                <button onClick={() => setShowAll((!showAll))}>
                    show {showAll ? 'important' : 'all'}
                </button>
            </div>
            <ul>
                {notesToShow.map(note =>
                    <Note
                        key={note.id}
                        note={note}
                        toggleImportance={() => toggleImportanceOf(note.id)}
                    />
                )}
            </ul>
            <form onSubmit={addNote}>
                <input value={newNote} onChange={handleNoteChange}/>
                <button type="submit">save</button>
            </form>
            <Footer/>
        </div>
    )
}

export default App