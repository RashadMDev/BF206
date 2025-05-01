import React, { useState, useEffect } from 'react'
import Note from './Note'

const NoteApp = () => {
      const [notes, setNotes] = useState(() => {
            const savedNotes = localStorage.getItem('notes')
            return savedNotes ? JSON.parse(savedNotes) : []
      })
      const [text, setText] = useState('')

      useEffect(() => { localStorage.setItem('notes', JSON.stringify(notes)) }, [notes])

      const addNote = () => {
            if (text.trim() === '') return
            const newNote = {
                  id: Date.now(),
                  content: text.trim()
            }
            setNotes([...notes, newNote])
            setText('')
      }

      const deleteNote = (id) => { setNotes(notes.filter(note => note.id !== id)) }

      return (
            <div>
                  <input
                        type="text"
                        placeholder="Yeni qeyd yazın..."
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                  />
                  <button onClick={addNote}>Əlavə et</button>

                  <div className="note-list">
                        {notes.map(note => (
                              <Note key={note.id} note={note} onDelete={deleteNote} />
                        ))}
                  </div>
            </div>
      )
}

export default NoteApp
