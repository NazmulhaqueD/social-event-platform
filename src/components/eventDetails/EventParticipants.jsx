import { useEffect, useState } from 'react';
import axios from 'axios';

const EventParticipants = ({ eventId }) => {
    const [participants, setParticipants] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/joinedEvents?eventId=${eventId}`)
            .then(res => setParticipants(res.data))
            .catch(err => console.error(err));
    }, [eventId]);

    return (
        <div className="mt-10 border-t pt-6">
            <h3 className="text-2xl font-semibold mb-4">👥 Participants</h3>
            {participants.length > 0 ? (
                <div className="flex flex-wrap items-center gap-4">
                    {participants.map((p, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <img
                                src={p.participantPhoto || "https://i.ibb.co/gwXQ3bj/default-user.png"}
                                alt={p.participantName}
                                className="w-12 h-12 rounded-full border-2 border-primary"
                            />
                            <p className="text-sm mt-1 font-medium">{p.participantName}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-500 italic">No participants yet.</p>
            )}
        </div>
    );
};

export default EventParticipants;
