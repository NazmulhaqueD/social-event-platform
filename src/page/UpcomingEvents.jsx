import React, { useState } from 'react';
import { NavLink, useLoaderData } from 'react-router';
import EventCard from '../components/EventCard';
import axios from 'axios';

const UpcomingEvents = () => {

    const initialEvents = useLoaderData();
    const [events, setEvents] = useState(initialEvents)
    console.log(events)

    const handleFilterEvent = (e) => {
        const selectedValue = e.target.value;
        axios.get(`https://social-serve-server.vercel.app/events?type=${selectedValue}`)
            .then(result => {
                setEvents(result.data);
            })
        console.log(selectedValue)
    }

    const handleSearchByTitle = (e) => {
        e.preventDefault();
        const searchTitle = e.target.title.value;
        axios.get(`https://social-serve-server.vercel.app/events?search=${searchTitle}`)
            .then(result => {
                setEvents(result.data);
            })
        console.log(searchTitle);
    }

    return (
        <div className='bg-base-200 md:p-4 rounded-2xl my-6'>
            <h1 className='text-2xl md:text-4xl p-4 md:pb-6 text-center text-teal-400 font-bold'>Upcoming Events</h1>
            <div className='max-w-3xl grid grid-cols-1 md:grid-cols-2 mx-auto gap-3 mb-4'>
                <fieldset className="flex gap-6 w-full">
                    <select onChange={handleFilterEvent} defaultValue="" name='eventType' className="select w-full">
                        <option value='' disabled>Event Type filter</option>
                        <option value={''}>All Events</option>
                        <option>Cleanup</option>
                        <option>Plantation</option>
                        <option>Donation</option>
                    </select>
                </fieldset>

                <fieldset className="w-full relative">
                    <form onSubmit={handleSearchByTitle}>
                        <input type="text" className="input w-full" name='title' placeholder="Search by title" />
                        <button type='submit' className='btn btn-primary rounded-xl focus:btn-success absolute right-0 z-20'>search</button>
                    </form>
                </fieldset>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    events.map(event => <EventCard
                        key={event._id}
                        event={event}
                    ></EventCard>)
                }
            </div>
        </div>
    );
};

export default UpcomingEvents;