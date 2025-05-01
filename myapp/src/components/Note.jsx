import React from 'react'

const Note = ({ note, onDelete }) => {
      return (
            <div className="note">
                  <p>{note.content}</p>
                  <button onClick={() => onDelete(note.id)}>Sil</button>
            </div>
      )
}

export default Note
