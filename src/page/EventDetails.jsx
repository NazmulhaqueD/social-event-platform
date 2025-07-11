import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { AuthContext } from '../contexts/AuthContext/AuthProvider';
import { toast } from 'react-toastify';

const EventDetails = () => {

    const { user, setLoading } = useContext(AuthContext);
    const { id } = useParams();
    const [event, setEvent] = useState(null)
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://social-serve-server.vercel.app/events/${id}`, {

            headers: { Authorization: `Bearer ${user?.accessToken}` }
        })
            .then(result => {
                setEvent(result.data)
            })
    }, [id, user])

    const handleJoinEvent = () => {
        setLoading(true);
        const { _id, ...joinedEvents } = event;
        // const joinedEvents = event;
        joinedEvents.join_id = event._id;
        joinedEvents.participant = user.email;

        axios.post('https://social-serve-server.vercel.app/joinedEvents', joinedEvents, {

            headers: { Authorization: `Bearer ${user?.accessToken}` }
        })
            .then(result => {
                if (result?.data.insertedId) {
                    setLoading(false)
                    toast.success('You are participate this event successfully')
                    navigate('/joinedEvents')
                }
            })
            .catch(error => {
                toast(error)
            })
    }

    return (
        <div className="card bg-base-300 my-8 max-w-md mx-auto flex flex-col gap-4 h-full p-4 shadow-lg">
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