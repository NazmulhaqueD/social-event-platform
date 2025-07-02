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
        <div className='bg-base-200 rounded-xl'>
            <div className=' my-8 py-2 md:py-6 max-w-3xl mx-auto rounded-2xl'>
                <h1 className='text-2xl sm:text-4xl text-center font-bold py-4 text-teal-400'>Subscribe to Our Newsletter</h1>
                <p className='text-xl italic text-center'>Join our community to get event updates</p>
                <div className='p-6 w-full'>
                    <form onSubmit={handleSubsCribe} className='relative'>
                        <input type="email" defaultValue={`${user ? user.email : ''}`} placeholder='Enter Your Email' className='input w-full' />
                        <button className='btn btn-primary absolute right-0 z-20'>SubsCribe</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;