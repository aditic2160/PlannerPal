// Notes.js
import React, { useState } from 'react';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [draft, setDraft] = useState('');
  const [editingId, setEditingId] = useState(null);

const add = () => {
  if (!draft.trim()) {
    alert("Note cannot be empty.");
    return;
  }
  setNotes((n) => [{ id: Date.now(), text: draft.trim(), date: new Date() }, ...n]);
  setDraft('');
};


  const saveEdit = (id, text) => {
    setNotes((n) => n.map(note => note.id === id ? { ...note, text } : note));
    setEditingId(null);
  };

  const remove = (id) => setNotes((n) => n.filter(note => note.id !== id));

  return (
    <div className="content-card">
      <h2>Notes</h2>

      <div className="col mb-12">
        <textarea placeholder="Type a quick note..." value={draft} onChange={(e) => setDraft(e.target.value)} />
        <div style={{display:'flex', justifyContent:'flex-end', gap:8}}>
          <button className="secondary" onClick={() => { setDraft(''); }}>Clear</button>
          <button onClick={add}>Add Note</button>
        </div>
      </div>

      <div>
        {notes.length === 0 && <p className="muted">No notes yet.</p>}
        <ul>
          {notes.map(note => (
            <li key={note.id} className="card-row">
              <div style={{flex:1}}>
                {editingId === note.id ? (
                  <div>
                    <textarea defaultValue={note.text} onBlur={(e) => saveEdit(note.id, e.target.value)} />
                    <div className="small muted">Tip: click outside the box to save</div>
                  </div>
                ) : (
                  <>
                    <div style={{fontWeight:600}}>{note.text}</div>
                    <div className="small muted">Created: {note.date.toLocaleString()}</div>
                  </>
                )}
              </div>

              <div style={{display:'flex', gap:8}}>
                <button className="action-btn ghost" onClick={() => setEditingId(note.id)}>Edit</button>
                <button className="action-btn warn" onClick={() => remove(note.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Notes;
