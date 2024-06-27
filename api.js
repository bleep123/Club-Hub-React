const API_URL = 'http://localhost:5000/api/clubs';

export const getClubs = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const createClub = async (club) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(club),
  });
  return response.json();
};

export const participateInClub = async (clubId, participant) => {
  const response = await fetch(`${API_URL}/${clubId}/participate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(participant),
  });
  return response.json();
};
