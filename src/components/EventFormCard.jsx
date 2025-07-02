import React from 'react';
import { NavLink } from 'react-router';

const EventFormCard = ({ event, index }) => {

    // const date = new Date().toLocaleString();
    console.log(event)
    return (
        <tr className='text-[16px] shadow-sm hover:shadow-primary'>
            <th>{index + 1} </th>
            <td>{event.title} </td>
            <td>{new Date(event.eventDate).toLocaleDateString()}</td>
            <td>{event.location}</td>
            <td>{event.eventType}</td>
            <td >
                <div className=' py-2'>
                    <img className='h-16 w-36 rounded-xl' src={event.photoURL} alt="" />
                </div>
            </td>
            <th>
                <NavLink to={`/eventDetails/${event._id}`}>
                    <button className="btn btn-success">See More</button>
                </NavLink>
            </th>

        </tr>
    );
};

export default EventFormCard;