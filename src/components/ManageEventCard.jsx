import axios from 'axios';
import React from 'react';
import { NavLink } from 'react-router';
import Swal from 'sweetalert2';

const ManageEventCard = ({ event, setMyCreateEvents, myCreateEvents }) => {

    const handleDeleteEvent = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(`https://social-serve-server.vercel.app/eventDelete/${event._id}`)
                    .then(result => {
                        if (result.data.acknowledged) {
                            const remainingEvent = myCreateEvents.filter(singleEvent => singleEvent._id !== event._id);
                            setMyCreateEvents(remainingEvent);
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        console.log(result.data);
                    })
                    .catch(error => {
                        console.log(error);
                    })

            }
        });
    }

    return (
        <div>
            <div className="">
                <div className="bg-base-300 rounded p-4 space-y-3 inset-shadow-sm inset-shadow-indigo-500/50">
                    <img src={event.photoURL} className="w-full h-40 md:h-56 object-cover rounded-lg" />
                    <div>
                        <h2 className="text-xl font-semibold mt-2">{event.title}</h2>
                        <p>Date: {new Date(event.eventDate).toLocaleDateString()}</p>
                        <p>Location: {event.location}</p>
                        <p>Type: {event.eventType}</p>
                    </div>
                    <div className="mt-2 justify-between grid grid-cols-2 gap-4">
                        <NavLink to={`/eventUpdate/${event._id}`} className=" py-2 rounded-xl btn btn-primary">Edit</NavLink>
                        <button onClick={handleDeleteEvent} className=" py-2 rounded-xl btn btn-error">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageEventCard;