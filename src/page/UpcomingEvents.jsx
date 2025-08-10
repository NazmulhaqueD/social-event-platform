import React, { useContext, useState } from 'react';
import { NavLink, useLoaderData } from 'react-router';
import EventCard from '../components/EventCard';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext/AuthProvider';
import EventFormCard from '../components/EventFormCard';
import { CiGrid32 } from 'react-icons/ci';
import { FaTable } from 'react-icons/fa';

const UpcomingEvents = () => {

    const { setLoading } = useContext(AuthContext);
    const initialEvents = useLoaderData();
    const [events, setEvents] = useState(initialEvents)
    const [isFormView, setIsFormView] = useState(true);
    console.log(isFormView);


    const handleFilterEvent = (e) => {
        setLoading(true);
        const selectedValue = e.target.value;
        axios.get(`https://social-serve-server.vercel.app/events?type=${selectedValue}`)
            .then(result => {
                setEvents(result.data);
                setLoading(false);
            })
    }

    const handleSearchByTitle = (e) => {
        setLoading(true);
        e.preventDefault();
        const searchTitle = e.target.title.value;
        axios.get(`https://social-serve-server.vercel.app/events?search=${searchTitle}`)
            .then(result => {
                setEvents(result.data);
                setLoading(false)
            })
    }

    return (
        <div className='bg-base-200 max-w-7xl mx-auto min-h-[75vh] p-4 rounded-xl my-6'>
            <h1 className='text-2xl md:text-4xl p-4 md:pb-8 text-center text-teal-400 font-bold'>Upcoming Events</h1>
            <div className='max-w-3xl grid grid-cols-1 md:grid-cols-2 mx-auto gap-3 mb-4 md:mb-6'>
                <fieldset className="flex gap-6 w-full">
                    <select onChange={handleFilterEvent} defaultValue="" name='eventType' className="select w-full">
                        <option value='' disabled>Event Type filter</option>
                        <option value={''}>All Events</option>
                        <option>Cleanup</option>
                        <option>Plantation</option>
                        <option>Donation</option>
                    </select>
                </fieldset>

                <div className='flex items-center gap-2'>
                    <fieldset className="w-full relative">
                        <form onSubmit={handleSearchByTitle}>
                            <input type="text" className="input w-full" name='title' placeholder="Search by title" />
                            <button type='submit' className='btn btn-primary focus:btn-success absolute right-0 z-20'>search</button>
                        </form>
                    </fieldset>

                    <button onClick={() => setIsFormView(!isFormView)}
                        className='text-4xl btn btn-success text-white'
                    >
                        {
                            isFormView ? <CiGrid32 /> : <FaTable />
                        }
                    </button>
                </div>
            </div>
            <div className={`${isFormView ? 'hidden' : 'block'} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`}>
                {
                    events?.map(event => <EventCard
                        key={event._id}
                        event={event}
                    ></EventCard>)
                }
            </div>

            {/* view table formate  */}
            <div className={`${isFormView ? 'block' : 'hidden'} rounded-xl shadow-sm shadow-primary`}>
                <div className='overflow-x-auto w-full'>
                    <table className={`table w-full min-w-[700px] rounded-xl`}>
                        <thead className=''>
                            <tr className='text-xl bg-base-300'>
                                <th>No:</th>
                                <th>Title</th>
                                <th>Date</th>
                                <th>Location</th>
                                <th>Event Type</th>
                                <th>Thumbnail</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                events?.map((event, index) => <EventFormCard key={event._id} index={index} event={event}></EventFormCard>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UpcomingEvents;