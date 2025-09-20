// TodoList.js
import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newText, setNewText] = useState('');
  const [newDue, setNewDue] = useState('');
  const [newEst, setNewEst] = useState('');

const addTodo = () => {
  if (!newText.trim()) {
    alert("Please enter a task before adding.");
    return;
  }
  if (newEst && newEst < 0) {
    alert("Estimated minutes must be positive.");
    return;
  }
  const todo = {
    id: Date.now(),
    text: newText.trim(),
    due: newDue || 'No date',
    est: parseInt(newEst) || 0,
    completed: false,
  };
  setTodos((t) => [todo, ...t]);
  setNewText(''); setNewDue(''); setNewEst('');
};


  const toggle = (id) => setTodos((t) => t.map(item => item.id === id ? {...item, completed: !item.completed} : item));
  const del = (id) => setTodos((t) => t.filter(item => item.id !== id));

  const totalEst = todos.reduce((s, t) => s + (t.est || 0), 0);

  return (
    <div className="content-card">
      <h2>To-do List</h2>

      <div className="row mb-12">
        <input placeholder="Task" value={newText} onChange={(e) => setNewText(e.target.value)} />
        <input type="date" value={newDue} onChange={(e) => setNewDue(e.target.value)} />
        <input type="number" placeholder="Est. min" value={newEst} onChange={(e) => setNewEst(e.target.value)} />
        <button onClick={addTodo}>Add</button>
      </div>

      <div>
        {todos.length === 0 && <p className="muted">No todos yet. Add your first task above!</p>}

        <ul>
          {todos.map((t) => (
            <li key={t.id} className="card-row">
              <div style={{display:'flex', gap:12, alignItems:'center'}}>
                <input type="checkbox" checked={t.completed} onChange={() => toggle(t.id)} />
                <div>
                  <div style={{ fontWeight: 600, textDecoration: t.completed ? 'line-through' : 'none' }}>{t.text}</div>
                  <div className="small muted">Due: {t.due} • Est: {t.est} min</div>
                </div>
              </div>

              <div style={{display:'flex', gap:8}}>
                <button className="action-btn ghost" onClick={() => toggle(t.id)}>{t.completed ? 'Undo' : 'Done'}</button>
                <button className="action-btn warn" onClick={() => del(t.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div style={{marginTop:12, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <div className="muted">Total estimated time: <strong>{totalEst}</strong> minutes</div>
        <div className="small muted">Tasks: {todos.length}</div>
      </div>
    </div>
  );
};

export default TodoList;
