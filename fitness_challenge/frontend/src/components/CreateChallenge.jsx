import React, { useState } from 'react';

function CreateChallenge() {
    const [  challengeData, setChallengeData ] = useState({
        title: '',
        description: '',
        start_date: '',
        end_date: '',
        entry_fee: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit challenge data to API
    }


return(
    <div>
        <h2>Create A Challenge</h2>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input
            type="text"
            name="title"
            value={challengeData.title}
            onChange={(e) =>
            setChallengeData({...challengeData, title: e.target.value})
        }
        />
            <label>Description</label>
            <input
            type="text"
            name="description"
            value={challengeData.description}
            onChange={(e) =>
            setChallengeData({...challengeData, description: e.target.value})
        }
        />
            <label>Start Date</label>
            <input
            type="text"
            name="start_date"
            value={challengeData.start_date}
            onChange={(e) =>
            setChallengeData({...challengeData, start_date: e.target.value})
        }
        />
            <label>End Date</label>
            <input
            type="text"
            name="end_date"
            value={challengeData.end_date}
            onChange={(e) =>
            setChallengeData({...challengeData, end_date: e.target.value})
        }
        />
            <label>Entry Fee</label>
            <input
            type="text"
            name="entry_fee"
            value={challengeData.entry_fee}
            onChange={(e) =>
            setChallengeData({...challengeData, entry_fee: e.target.value})
        }
        />
        <button type="submit">Create Challenge</button>
        </form>
    </div>
)
};

export default CreateChallenge();
    