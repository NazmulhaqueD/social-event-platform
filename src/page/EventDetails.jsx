import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { AuthContext } from '../contexts/AuthContext/AuthProvider';
import { toast } from 'react-toastify';

const EventDetails = () => {

    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const [event, setEvent] = useState(null)
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:5000/events/${id}`)
            .then(result => {
                setEvent(result.data)
            })
    }, [id])

    const handleJoinEvent = () => {
        const { _id, ...joinedEvents } = event;
        // const joinedEvents = event;
        joinedEvents.join_id = event._id;
        joinedEvents.participant = user.email;
        console.log(joinedEvents);

        axios.post('http://localhost:5000/joinedEvents', joinedEvents)
            .then(result => {
                if (result?.data.insertedId) {
                    toast.success('You are participate this event successfully')
                    navigate('/joinedEvents')
                }
                console.log(result.data);
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="card bg-base-300 my-8 max-w-md mx-auto flex flex-col gap-4 h-full p-2 shadow-lg">
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
                <button onClick={handleJoinEvent} className="btn btn-primary w-full mt-4">Join Event</button>
            </div>
        </div>
    );
};

export default EventDetails;