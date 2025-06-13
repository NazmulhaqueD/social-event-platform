import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const EventDetails = () => {

    const { id } = useParams();
    const [event, setEvent] = useState(null)
    console.log(event)

    useEffect(() => {
        axios.get(`http://localhost:5000/eventDetails/${id}`)
            .then(result => {
                setEvent(result.data)
            })
    }, [id])

    return (
        <div className="card bg-base-300 max-w-md mx-auto flex flex-col gap-4 h-full p-2 shadow-lg">
            <figure>
                <img
                    className='w-full h-[300px] rounded-xl'
                    src={event?.photoURL}
                    alt="Shoes" />
            </figure>
            <div className="flex flex-col gap-3 flex-grow">
                <h2 className="card-title font-semibold text-xl">{event?.title}</h2>
                <span><p className='text-xl italic font-thin'>{event?.location}</p></span>
                <h2>{new Date(event?.eventDate).toDateString()}</h2>
                <p>{event?.eventType}</p>
                <p className='py-2 italic font-thin'>{event?.Descriptions}</p>
            </div>
            <div className="card-actions justify-center mt-auto">
                <button className="btn btn-primary w-full mt-4">View Event</button>
            </div>
        </div>
    );
};

export default EventDetails;