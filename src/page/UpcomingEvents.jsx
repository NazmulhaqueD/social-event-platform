import React from 'react';
import { NavLink, useLoaderData } from 'react-router';
import EventCard from '../components/EventCard';

const UpcomingEvents = () => {

    const events = useLoaderData();
    console.log(events)

    return (
        <div className='bg-base-200 md:p-4 rounded-2xl'>
            <h1 className='text-2xl md:text-4xl py-8 text-center text-teal-400 font-bold'>Upcoming Events</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    events.map(event => <EventCard
                        key={event._id}
                        event={event}
                    ></EventCard>)
                }
            </div>
        </div>
    );
};

export default UpcomingEvents;