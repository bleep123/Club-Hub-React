import React from "react";
import Club from "./Club";

function ClubList({ clubs, participate }) {
  return (
    <div className="club-list">
      {clubs.map(club => (
        <Club key={club.id} club={club} participate={participate} />
      ))}
    </div>
  );
}

export default ClubList;
