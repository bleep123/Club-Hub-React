import React, { useState, useEffect } from "react";
import ClubList from "./ClubList";
import ClubForm from "./ClubForm";

import { getClubs, createClub, participateInClub } from './api';

function App() {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    fetchClubs();
  }, []);

  const fetchClubs = async () => {
    const clubs = await getClubs();
    setClubs(clubs);
  };

  const addClub = async (club) => {
    const newClub = await createClub(club);
    setClubs([...clubs, newClub]);
  };

  const participate = async (clubId, participant) => {
    await participateInClub(clubId, participant);
    fetchClubs();
  };

  return (
    <div className="container">
      <h1 className="header">College Societies</h1>
      <ClubList clubs={clubs} participate={participate} />
      <ClubForm addClub={addClub} />
    </div>
  );
}

export default App;

