import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { FaShareSquare } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { IoLogOutSharp } from 'react-icons/io5';
import { MdTipsAndUpdates } from 'react-icons/md';
import { NavLink } from 'react-router';
import Logout from '../shared/Logout';

const AsideDash = () => {
    return (
        <div className=''>
            <h1 className='text-4xl font-bold text-primary mb-12'><NavLink to={'/'}>Social Events</NavLink></h1>
            <h1 className='text-2xl font-bold my-6'>Dashboard</h1>
            <div className=' flex flex-col gap-6 asideDash'>
                <NavLink to={'/myProfile'} className={'flex items-center gap-2 font-semibold'}><ImProfile /> <span>My Profile</span></NavLink>
                <NavLink to={'/createEvent'} className={'flex items-center gap-2 font-semibold'}><FaShareSquare /> <span>Create a Event</span></NavLink>
                <NavLink to={'/joinedEvents'} className={'flex items-center gap-2 font-semibold'}><CgProfile /> <span>My Joined Events</span></NavLink>
                <NavLink to={'/manageEvents'} className={'flex items-center gap-2 font-semibold'}><MdTipsAndUpdates /> <span>My Events</span></NavLink>
                <NavLink to={'/upcomingEvents'} className={'flex items-center gap-2 font-semibold'}><MdTipsAndUpdates /> <span>Upcoming Events</span></NavLink>
                <Logout></Logout>
            </div>
        </div>
    );
};

export default AsideDash;