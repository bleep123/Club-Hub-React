import React, { useState } from "react";
import ParticipationForm from "./ParticipationForm";

function Club({ club, participate }) {
  const [showForm, setShowForm] = useState(false);

  const handleParticipate = (participant) => {
    participate(club.id, participant);
    setShowForm(false);
  };

  return (
    <div className="club">
      <h2>{club.name}</h2>
      <p>{club.description}</p>
      <h4>Events</h4>
      <ul>
        {club.events.map((event, index) => (
          <li key={index}>{event}</li>
        ))}
      </ul>
      <h4>Participants</h4>
      <ul>
        {club.participants.map((participant, index) => (
          <li key={index}>{participant.name}</li>
        ))}
      </ul>
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Cancel' : 'Participate'}
      </button>
      {showForm && <ParticipationForm onSubmit={handleParticipate} />}
    </div>
  );
}

export default Club;
