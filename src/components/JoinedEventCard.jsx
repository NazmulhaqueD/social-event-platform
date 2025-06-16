import React from 'react';
import Swal from 'sweetalert2';
import { motion } from "motion/react"

const EventCard = ({ event, myJoinedEvents, setMyJoinedEvents }) => {


    const handleCancelEvent = () => {

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

                fetch(`http://localhost:5000/cancelEvent/${event._id}`, { method: 'DELETE' })
                    .then(res => res.json())
                    .then(data => {
                        if (data?.deletedCount) {
                            const remainedEvent = myJoinedEvents.filter(singleEvent => singleEvent._id !== event._id);
                            setMyJoinedEvents(remainedEvent)
                        }
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your event has been deleted successfully",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    })
            }
        });
    }

    return (
        <motion.div
            initial={{y:10, opacity:0.5}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 2}}
            className="card bg-base-100 w-full flex flex-col gap-4 h-full min-h-[450px] p-4 shadow-lg hover:shadow-2xl transition duration-300">
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
                <button onClick={handleCancelEvent} className="btn btn-primary w-full mt-4">delete Event</button>
            </div>
        </motion.div>
    );
};

export default EventCard;