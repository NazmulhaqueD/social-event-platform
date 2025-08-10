import React from 'react';
import { NavLink } from 'react-router';
import { motion } from "motion/react"


const EventCard = ({ event }) => {
    return (
        <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            className="bg-base-100 w-full flex flex-col p-4 shadow-lg hover:shadow-lg hover:scale-102 transition-all ease-in-out duration-300 rounded-xl">
            <figure>
                <img
                    className='w-full h-[200px] rounded-xl'
                    src={event?.photoURL}
                    alt="Shoes" />
            </figure>
            <div className='rounded-xl bg-base-100'>
                <div className="flex flex-col gap-3 flex-grow">
                    <h2 className="card-title font-bold text-xl">{event.title}</h2>
                    {/* <span><p className='text-xl italic font-semibold'>{event.location}</p></span> */}
                    {/* <p className='text-sm'>creator: {event.creator}</p> */}
                    <h2>{new Date(event.eventDate).toDateString()}</h2>
                    <p>{event.eventType}</p>
                </div>
            </div>
            <div className="card-actions justify-center mt-auto">
                <NavLink to={`/eventDetails/${event._id}`} className="btn btn-primary w-full mt-4">View Event</NavLink>
            </div>
        </motion.div>
    );
};

export default EventCard;