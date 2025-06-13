import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='lg:max-w-11/12 mx-auto p-2 md:p-4'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;