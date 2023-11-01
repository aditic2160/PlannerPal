import React, { useState } from 'react';

const Schedule = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ title: '', description: '', time: '', period: 'AM' });
  const [editIndex, setEditIndex] = useState(-1);

  const handleAddEvent = () => {
    if (newEvent.title && newEvent.time) {
      if (editIndex === -1) {
        setEvents([...events, { ...newEvent }]);
      } else {
        const updatedEvents = [...events];
        updatedEvents[editIndex] = { ...newEvent };
        setEvents(updatedEvents);
        setEditIndex(-1);
      }
      setNewEvent({ title: '', description: '', time: '', period: 'AM' });
    }
  };

  const handleEditEvent = (index) => {
    const eventToEdit = events[index];
    setNewEvent({
      title: eventToEdit.title,
      description: eventToEdit.description,
      time: eventToEdit.time,
      period: eventToEdit.period,
    });
    setEditIndex(index);
  };

  const handleDeleteEvent = (index) => {
    const updatedEvents = [...events];
    updatedEvents.splice(index, 1);
    setEvents(updatedEvents);
    setEditIndex(-1);
  };

  const sortedEvents = events.slice().sort((a, b) => {
    const timeA = `${a.time} ${a.period}`;
    const timeB = `${b.time} ${b.period}`;
    return timeA.localeCompare(timeB);
  });

  return (
    <div className="schedule">
      <h2>Schedule</h2>
      <div className="add-event">
        <input
          type="text"
          placeholder="Event Title"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Event Description"
          value={newEvent.description}
          onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Event Time"
          value={newEvent.time}
          onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
        />
        <select
          value={newEvent.period}
          onChange={(e) => setNewEvent({ ...newEvent, period: e.target.value })}
        >
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
        <button onClick={handleAddEvent}>
          {editIndex === -1 ? 'Add Event' : 'Update Event'}
        </button>
      </div>
      <div className="event-list">
        {sortedEvents.map((event, index) => (
          <div key={index} className="event">
            <p>{event.title}</p>
            <p>{event.description}</p>
            <p>
              {event.time} {event.period}
            </p>
            <button onClick={() => handleEditEvent(index)}>Edit</button>
            <button onClick={() => handleDeleteEvent(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
