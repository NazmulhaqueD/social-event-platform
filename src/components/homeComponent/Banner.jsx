import React from 'react';
import { NavLink } from 'react-router';
import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
    return (
        <div className='bg-base-300 rounded-xl relative'>
            <div>
                <img src={'https://i.postimg.cc/wjdgJHwc/pexels-cottonbro-6591147.jpg'}
                    className='w-full h-[60%] md:h-[500px] lg:h-[700px] rounded-xl'
                    alt="" />
            </div>
            <div className='text-center p-4 md:absolute md:top-8 md:left-1/2 md:transform md:-translate-x-1/2 nd:-translate-y-1/2'>
                <p className='italic font-semibold md:text-xl md:font-semibold'>Take Action, Make Impact</p>
                <h1 className='text-2xl md:text-4xl  font-bold text-center py-4'>
                    <Typewriter
                        cursor
                        cursorBlinking
                        delaySpeed={5000}
                        deleteSpeed={25}
                        loop={0}
                        typeSpeed={75}
                        words={[
                            'Empowering Communities through Action',
                        ]}
                    />

                </h1>
                <p className='text-sm md:text-xl md:font-semibold'>Join, Create, and Track Events that make a difference in your local area.</p>
                <div className='my-4 flex justify-center gap-4'>
                    <NavLink to={'/upcomingEvents'} className='btn btn-success'>Get Started</NavLink>
                    <NavLink to={'/createEvent'} className='btn btn-primary'>Create Event</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Banner;