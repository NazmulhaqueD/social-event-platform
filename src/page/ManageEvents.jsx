import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext/AuthProvider';
import axios from 'axios';
import ManageEventCardMobile from '../components/ManageEventCard';

const ManageEvents = () => {

    const { user } = useContext(AuthContext);
    const [myCreateEvents, setMyCreateEvents] = useState(null);
    console.log(myCreateEvents)


    useEffect(() => {
        axios.get(`http://localhost:5000/events?email=${user?.email}`)
            .then(result => setMyCreateEvents(result.data));
    }, [user.email])

    return (
        <div className=''>
            <h1 className='text-teal-400 font-bold text-2xl md:text-4xl text-center my-8'>Manage Your Events</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    myCreateEvents?.map(event => <ManageEventCardMobile
                        key={event._id}
                        event={event}
                    ></ManageEventCardMobile>)
                }
            </div>
        </div>
    );
};

export default ManageEvents;