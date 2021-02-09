import React, { useState } from 'react'
import axios from 'axios'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const Add = () => {
    const [newNote, setNewNote] = useState('')
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')

    const addNote = event => {
        event.preventDefault()
        if (newNote.length > 0) {
            setSuccess('Tiedot lähetetty')
            setError('')
            const noteObject = {
                content: newNote,
                date: new Date().toISOString(),
                important: false,
            }
    
            axios
                .post('http://localhost:3001/notes', noteObject)
                .then(
                    setNewNote('')
                )
        } else {
            setSuccess('')
            setError("Tyhjä sisältökenttä")
        }
    }

    const changeNewNote = event => {
        setNewNote(event.target.value)
    }

    return(
        <div className="container">
           <div>
               {error &&
                    <div>
                        {error}
                    </div>
               }
               {success &&
                <div>
                    {success}
                </div>
               }
               <TextField onChange={changeNewNote} value={newNote}/>
               <Button onClick={addNote}>Send</Button>
           </div>
        </div>
    )
}

export default Add