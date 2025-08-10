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

        <div className='max-w-7xl mx-auto mt-8 md:mt-12 p-4 rounded-xl min-h-[70vh] shadow-md'>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 '>
                <img referrerPolicy='no-referrer' className='w-full h-[30vh] md:h-[40vh] lg:h-[60vh] rounded-xl'
                    src={event?.photoURL}
                    alt="Shoes" />

                <div className="flex flex-col gap-3 flex-grow">
                    <h2 className="card-title font-semibold text-xl md:text-2xl lg:text-4xl">{event?.title}</h2>
                    <span><p className='text-xl italic font-thin'>{event?.location}</p></span>
                    <h2>{new Date(event?.eventDate).toDateString()}</h2>
                    <p>{event?.eventType}</p>
                    <p className='py-2 italic font-thin'>{event?.Descriptions}</p>
                    <button onClick={handleJoinEvent} className="btn btn-primary w-auto block max-w-max">Join Event</button>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;