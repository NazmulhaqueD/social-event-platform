import React from 'react';
import DashNav from '../components/dashboard/DashNav';
import { Outlet } from 'react-router';
import AsideDash from '../components/dashboard/AsideDash';

const Dashboard = () => {
    return (
        <div className="drawer lg:gap-6 lg:drawer-open">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <DashNav></DashNav>
                <div className='bg-base-300 rounded-lg min-h-[87vh]'>
                    <Outlet></Outlet>
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                    {/* Sidebar content here */}
                    <AsideDash></AsideDash>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;