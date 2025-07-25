import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext/AuthProvider';
import EventCard from '../components/EventCard';
import JoinedEventCard from '../components/JoinedEventCard';
import IsEmptyEvents from '../components/IsEmptyEvents';
import { toast } from 'react-toastify';

const JoinedEvents = () => {

    const { user } = useContext(AuthContext);
    const [myJoinedEvents, setMyJoinedEvents] = useState(null)
    const isEmptyEvents = myJoinedEvents;

    useEffect(() => {
        axios.get(`https://social-serve-server.vercel.app/joinedEvents/${user?.email}`, {

            headers: { Authorization: `Bearer ${user?.accessToken}` }
        })
            .then(result => {
                setMyJoinedEvents(result.data);
            })
            .catch(error => {
                toast(error)
            })
    }, [user])

    return (
        <div className='py-6 md:py-8 bg-base-300 rounded-lg px-4 min-h-[70vh] mb-8'>
            <h1 className='text-2xl md:text-4xl text-center text-teal-400 py-8 font-bold'>Your Event Participation: {myJoinedEvents?.length}</h1>
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
            <IsEmptyEvents isEmptyEvents={isEmptyEvents} created={'joined'} navigate={'/upcomingEvents'}></IsEmptyEvents>
        </div>
    );
};

export default JoinedEvents;