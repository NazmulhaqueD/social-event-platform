import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext/AuthProvider';
import EventCard from '../components/EventCard';
import JoinedEventCard from '../components/JoinedEventCard';

const JoinedEvents = () => {

    const { user } = useContext(AuthContext);
    const [myJoinedEvents, setMyJoinedEvents] = useState(null)

    useEffect(() => {
        axios.get(`http://localhost:5000/joinedEvents/${user?.email}`)
            .then(result => {
                setMyJoinedEvents(result.data);
            })
            .catch(error => {
                console.log(error)
            })
    }, [user])

    return (
        <div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    myJoinedEvents?.map(event => <JoinedEventCard
                        key={event._id}
                        event={event}
                        setMyJoinedEvents={setMyJoinedEvents}
                        myJoinedEvents={myJoinedEvents}
                    ></JoinedEventCard>)
                }
            </div>
        </div>
    );
};

export default JoinedEvents;