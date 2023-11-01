import React, { useState } from 'react';
import './Notes.css'; // Add separate CSS file for Notes styles

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [editNote, setEditNote] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(null);

  const handleAddNote = () => {
    if (newNote) {
      const note = { text: newNote, id: Date.now(), date: new Date() };
      setNotes([...notes, note]);
      setNewNote('');
      setEditNote(null);
      focusOnNewNoteInput();
    }
  };

  const handleEditNote = (id, newText) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return { ...note, text: newText };
      }
      return note;
    });
    setNotes(updatedNotes);
    setEditNote(null);
  };

  const handleDeleteNote = (id) => {
    if (confirmDelete === id) {
      const updatedNotes = notes.filter((note) => note.id !== id);
      setNotes(updatedNotes);
      setConfirmDelete(null);
    } else {
      setConfirmDelete(id);
    }
  };

  const handleCancelDelete = (id) => {
    setConfirmDelete(null);
  };

  const focusOnNewNoteInput = () => {
    const input = document.getElementById('new-note-input');
    if (input) {
      input.focus();
    }
  };

  return (
    <div>
      <h2>Notes Page</h2>
      <div className="add-note">
        <textarea
          rows="4"
          cols="50"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Add a new note..."
          id="new-note-input" // Added ID for focusing
        />
        <button onClick={handleAddNote}>Add Note</button>
      </div>
      <div className="note-list">
        {notes.map((note) => (
          <div key={note.id} className="note">
            {editNote === note.id ? (
              <div>
                <textarea
                  rows="4"
                  cols="50"
                  value={note.text}
                  onChange={(e) => handleEditNote(note.id, e.target.value)}
                />
                <button onClick={() => setEditNote(null)}>Done</button>
              </div>
            ) : (
              <div>
                <p>{note.text}</p>
                <p>Created: {note.date.toLocaleString()}</p>
                <button onClick={() => setEditNote(note.id)}>Edit</button>
                <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
                {confirmDelete === note.id && (
                  <div>
                    <p>Confirm deletion?</p>
                    <button onClick={() => handleDeleteNote(note.id)}>Yes</button>
                    <button onClick={() => handleCancelDelete(note.id)}>No</button>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
