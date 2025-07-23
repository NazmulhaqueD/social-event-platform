import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext/AuthProvider';
import ThemeToggle from '../shared/ThemeToggle';
import { NavLink } from 'react-router';
import { FaHome } from "react-icons/fa";

const DashNav = () => {

    const { user } = useContext(AuthContext);

    return (
        <div className='p-4 shadow flex justify-between items-center'>
            <h1 className='text-xl lg:text-3xl font-semibold'><span className='text-accent'>Welcome! </span><br /> {user?.displayName}</h1>
            <div className='flex justify-center items-center gap-4'>
                <NavLink to={'/'}><FaHome size={30}/></NavLink>
                <ThemeToggle></ThemeToggle>
            </div>
        </div>
    );
};

export default DashNav;