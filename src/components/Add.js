import React, { useState } from 'react'
import axios from 'axios'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const Add = () => {
    const [newNote, setNewNote] = useState('')

    const addNote = event => {
        event.preventDefault()
        const noteObject = {
            content: newNote,
            date: new Date().toISOString(),
            important: false,
        }

        axios
            .post('http://localhost:3001/notes', noteObject)
            .then(response => {
                setNewNote('')
            })
    }

    const changeNewNote = event => {
        setNewNote(event.target.value)
    }

    return(
        <div className="container">
           <div>
               <TextField onChange={changeNewNote}/>
               <Button onClick={addNote}>Send</Button>
           </div>
        </div>
    )
}

export default Add