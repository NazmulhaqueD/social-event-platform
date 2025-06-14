import React from 'react';
import { NavLink } from 'react-router';

const ManageEventCardMobile = ({ event }) => {

    return (
        <div>
            <div className="">
                <div className="bg-base-300 rounded p-4 space-y-3 inset-shadow-sm inset-shadow-indigo-500/50">
                    <img src={event.photoURL} className="w-full h-40 md:h-56 object-cover rounded-lg" />
                    <h2 className="text-xl font-semibold mt-2">{event.title}</h2>
                    <p>Date: {new Date(event.eventDate).toLocaleDateString()}</p>
                    <p>Location: {event.location}</p>
                    <p>Type: {event.eventType}</p>
                    <div className="mt-2 justify-between grid grid-cols-2 gap-4">
                        <NavLink to={`/eventUpdate/${event._id}`} className=" py-2 rounded-xl btn btn-primary">Edit</NavLink>
                        <button className=" py-2 rounded-xl btn btn-error">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageEventCardMobile;