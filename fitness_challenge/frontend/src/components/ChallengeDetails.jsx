import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getChallengeDetails } from '../api';

function ChallengeDetails() {
    const { id } = useParams();
    const [ challenge, setChallenge ] = useState(null);

  useEffect(() => {
    // Fetch challenge details using the challenge ID
    getChallengeDetails(id).then((data) => setChallenge(data));
  }, [id]);

    return (
      <div>
        {challenge ? (
          <>
            <h2>{challenge.title}</h2>
            <ul>
              <li>{challenge.description}</li>
              <li>
                {challenge.start_date}-{challenge.end_date}
              </li>
              <li>{challenge.entry_fee}</li>
            </ul>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
}

export default ChallengeDetails;