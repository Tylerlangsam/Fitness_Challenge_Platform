import React, { useState, useEffect } from 'react';
import { listChallenges } from '../api';

function ListChallenges() {
    const [challenges, setChallenges] = useState([]);

    useEffect(() => {
        //Fetch the list of challenges from API

        listChallenges().then((data) => setChallenges(data));
    }, [])
     return (
    <div>
      <h2>Challenges</h2>
      <ul>
        {challenges.map((challenge) => (
          <li key={challenge.id}>{challenge.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListChallenges;