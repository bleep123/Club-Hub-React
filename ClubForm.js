import React, { useState } from "react";

function ClubForm({ addClub }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [events, setEvents] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const eventList = events.split(',').map(event => event.trim());
    addClub({ name, description, events: eventList, participants: [] });
    setName('');
    setDescription('');
    setEvents('');
  };

  return (
    <div className="club-form">
      <h2>Add New Club</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Events (comma separated):</label>
          <input
            type="text"
            value={events}
            onChange={(e) => setEvents(e.target.value)}
          />
        </div>
        <button type="submit">Add Club</button>
      </form>
    </div>
  );
}

export default ClubForm;
