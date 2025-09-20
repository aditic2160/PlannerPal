// Schedule.js
import React, { useState } from 'react';

const Schedule = () => {
  const [events, setEvents] = useState([]);
  const [form, setForm] = useState({ time: '', title: '' });

const add = () => {
  if (!form.time || !form.title.trim()) {
    alert("Please provide a time and activity.");
    return;
  }
  setEvents((e) => [{ ...form, id: Date.now() }, ...e].sort((a,b) => a.time.localeCompare(b.time)));
  setForm({ time:'', title:'' });
};

const formatTime = (time) => {
  const [h, m] = time.split(':');
  const date = new Date();
  date.setHours(h, m);
  return date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true });
};


  const remove = (id) => setEvents((e) => e.filter(x => x.id !== id));

  return (
    <div className="content-card">
      <h2>Schedule</h2>

      <div className="row mb-12">
        <input type="time" value={form.time} onChange={(e) => setForm({...form, time:e.target.value})} />
        <input placeholder="Activity" value={form.title} onChange={(e) => setForm({...form, title:e.target.value})} />
        <button onClick={add}>Add</button>
      </div>

      <div>
        {events.length === 0 && <p className="muted">No events yet. Add your first one!</p>}
        <ul>
          {events.map(ev => (
            <li key={ev.id} className="card-row">
              <div>
                <div style={{ fontWeight:700 }}>{formatTime(ev.time)} • {ev.title}</div>
              </div>
              <div>
                <button className="action-btn ghost" onClick={() => remove(ev.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Schedule;
