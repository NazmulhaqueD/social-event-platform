import React from 'react';
import { NavLink } from 'react-router';

const IsEmptyEvents = ({isEmptyEvents, created}) => {
    return (
        <div>
            
            {
                !isEmptyEvents?.length && <div>
                    <div className='max-w-md mx-auto flex justify-center flex-col mt-16
                         border-2 border-teal-500 p-8 rounded-xl'>
                        <h1 className='text-6xl text-center text-error font-bold'>Opps!!!</h1>
                        <p className='text-xl text-center py-6'>You haven't {created} any event yet</p>
                        <NavLink to={'/createEvent'} className='btn btn-success mx-auto'>{created} event</NavLink>
                    </div>
                </div>
            }
        </div>
    );
};

export default IsEmptyEvents;