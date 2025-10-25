import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext/AuthProvider';
import { toast } from 'react-toastify';

const Subscribe = () => {

    const { user } = useContext(AuthContext);

    const handleSubsCribe = (e) => {
        e.preventDefault();
        toast.success('You are Subscribed successfully')
    }


    return (
        <div className='max-w-3xl mx-auto mt4 md:mt-8 p-4 rounded-xl'>
            
                <h1 className='text-2xl md:text-4xl text-teal-400 text-center py-4 md:py-4 font-bold'>Subscribe to Our Newsletter</h1>
                <p className='text-xl italic text-center'>Join our community to get event updates</p>
                <div className='py-4 w-full'>
                    <form onSubmit={handleSubsCribe} className='relative w-full'>
                        <input type="email" defaultValue={`${user ? user.email : ''}`} placeholder='Enter Your Email' className='input w-full' />
                        <button className='btn btn-primary absolute right-0 z-20'>SubsCribe</button>
                    </form>
                </div>
           
        </div>
    );
};

export default Subscribe;