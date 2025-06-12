import React from 'react';

const Loader = () => {
    return (
        <div className='flex justify-center items-center h-[50vh]'>
            <span className="loading loading-spinner loading-xl"></span>
        </div>
    );
};

export default Loader;