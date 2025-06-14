import React from 'react';
import { NavLink } from 'react-router';

const EventCard = ({event}) => {
    return (
        <div className="card bg-base-300 w-full flex flex-col gap-4 h-full min-h-[450px] p-2 shadow-lg">
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
        </div>
    );
};

export default EventCard;