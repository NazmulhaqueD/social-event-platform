import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext/AuthProvider';
import axios from 'axios';
// import ManageEventCardMobile from '../components/ManageEventCard';
import ManageEventCard from '../components/ManageEventCard';
import { NavLink } from 'react-router';
import IsEmptyEvents from '../components/IsEmptyEvents';

const ManageEvents = () => {

    const { user } = useContext(AuthContext);
    const [myCreateEvents, setMyCreateEvents] = useState(null);
    const isEmptyEvents = myCreateEvents;


    useEffect(() => {
        axios.get(`https://social-serve-server.vercel.app/manageEvents?email=${user?.email}`, {

            headers: { Authorization: `Bearer ${user?.accessToken}` }
        })
            .then(result => setMyCreateEvents(result.data));
    }, [user])

    return (
        <div className='bg-base-200 my-8 rounded-2xl p-4 sm:min-h-[65vh]'>
            <h1 className='text-teal-400 font-bold text-2xl md:text-4xl text-center py-6'>Manage Your Events</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    myCreateEvents?.map(event => <ManageEventCard
                        key={event._id}
                        event={event}
                        setMyCreateEvents={setMyCreateEvents}
                        myCreateEvents={myCreateEvents}
                    ></ManageEventCard>)
                }
            </div>
            <IsEmptyEvents isEmptyEvents={isEmptyEvents} created={'created'} navigate={'/createEvent'}></IsEmptyEvents>
        </div>
    );
};

export default ManageEvents;