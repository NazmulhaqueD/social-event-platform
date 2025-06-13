import React from 'react';
import { NavLink, useLoaderData } from 'react-router';

const UpcomingEvents = () => {

    const events = useLoaderData();
    console.log(events)

    return (
        <div className='bg-base-200 md:p-4 rounded-2xl'>
            <h1 className='text-2xl md:text-4xl py-8 text-center text-teal-400 font-bold'>Upcoming Events</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    events.map(event => <div key={event._id} className="card bg-base-300 w-full flex flex-col gap-4 h-full min-h-[450px] p-2 shadow-lg">
                        <figure>
                            <img
                                className='w-full h-[300px] rounded-xl'
                                src={event?.photoURL}
                                alt="Shoes" />
                        </figure>
                        <div className="flex flex-col gap-3 flex-grow">
                            <h2 className="card-title font-semibold text-xl">{event.title}</h2>
                            <span><p className='text-xl italic font-thin'>{event.location}</p></span>
                            <h2>{new Date(event.eventDate).toDateString()}</h2>
                            <p>{event.eventType}</p>
                        </div>
                        <div className="card-actions justify-center mt-auto">
                            <NavLink to={`/eventDetails/${event._id}`} className="btn btn-primary w-full mt-4">View Event</NavLink>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default UpcomingEvents;