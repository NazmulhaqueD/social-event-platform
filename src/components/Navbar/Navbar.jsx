import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext/AuthProvider';
import { toast } from 'react-toastify';

const Navbar = () => {

    const [isDark, setIsDark] = useState(false);
    const [isDropdown, setIsDropdown] = useState(false);
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => {
                toast('logout successfully');
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    // dark or light mode toggle implement here 
    useEffect(() => {
        document.querySelector('html').setAttribute('data-theme', isDark ? 'dark' : 'light')
    }, [isDark])

    const links = <>
        <NavLink to='/'>home</NavLink>
        <NavLink to='/upcomingEvents'>Upcoming Events</NavLink>
        <NavLink to='/createEvent'>Create Event</NavLink>

    </>

    return (
        <div className="navbar bg-base-200 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 mobileLinks shadow activeLink">
                        {links}
                    </ul>
                </div>
                <h2 className="text-xl font-bold">Social Events</h2>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-x-4 font-semibold activeLink">
                    {links}
                </ul>
            </div>
            <div className="navbar-end items-center gap-2">
                <div>
                    <input onClick={() => setIsDark(!isDark)} type="checkbox" defaultChecked className="toggle toggle-lg" />
                </div>
                <div>
                    {
                        user ?
                            <span className='relative'>
                                <div className="tooltip tooltip-bottom w-full flex flex-col items-center" data-tip={`${user?.displayName}`}>
                                    <img onClick={() => setIsDropdown(!isDropdown)} src={user.photoURL} className='w-12 h-12 rounded-full cursor-pointer' alt="" />
                                </div>
                                <div className={`flex flex-col z-20 bg-base-300 p-4 rounded-xl gap-y-2 transition-all duration-300 absolute activeLink linkByImage w-32 -right-18 
                                    ${isDropdown ? 'top-14' : '-top-56'}`}>
                                    <NavLink onClick={() => setIsDropdown(false)} to='/createEvent'>Create Event</NavLink>
                                    <NavLink onClick={() => setIsDropdown(false)} to='/joinedEvents'>Joined Events</NavLink>
                                    <NavLink onClick={() => setIsDropdown(false)} to='/manageEvents'>Manage Events</NavLink>
                                </div>
                            </span> :
                            ''
                    }
                </div>
                <div>
                    {
                        user?.email ?
                            <NavLink onClick={handleLogout} className='btn btn-sm btn-error'>LogOut</NavLink>
                            :
                            <NavLink to={'/login'} className='btn btn-sm btn-success'>Login</NavLink>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;