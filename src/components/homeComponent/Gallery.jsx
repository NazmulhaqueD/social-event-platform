import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router';

const Gallery = () => {

    const [latestEvents, setLatestEvents] = useState(null)

    useEffect(() => {
        fetch('https://social-serve-server.vercel.app/latestEvents')
            .then(res => res.json())
            .then(data => setLatestEvents(data))
    }, [])
    return (
        <div className='max-w-7xl mx-auto bg-base-200 rounded-xl'>
            <h1 className='text-2xl md:text-4xl p-4 md:py-8 text-center text-teal-400 font-bold'>Latest Events Gallery</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 md:p-6 gap-6'>
                {
                    latestEvents?.map(latestEvent => <div
                        className='shadow-sm hover:shadow-primary rounded-xl overflow-hidden group p-4 relative hover:scale-105 transition ease-in-out duration-300'
                        key={latestEvent.id}>
                        <div>
                            <img
                                className='h-56 w-full rounded-xl'
                                src={latestEvent.photoURL} alt="" />
                        </div>
                        <p className='opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out absolute top-1/2 left-1/2 text-2xl text-teal-400 bg-black/30 p-4 rounded-lg transform -translate-1/2'>{latestEvent.title}</p>
                        {/* <h1>{latestEvent.title}</h1> */}
                    </div>)
                }
            </div>
            <div className='flex justify-center'>
                <NavLink to='/upcomingEvents' className='btn btn-primary my-6'>View All Events</NavLink>
            </div>
        </div>
    );
};

export default Gallery;