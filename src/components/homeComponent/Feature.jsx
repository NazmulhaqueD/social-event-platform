import React from 'react';
import { motion } from "motion/react"


const features = [
    {
        "id": 1,
        "title": "Create Your Own Events",
        "description": "Organize and post your own community events in just a few clicks. Bring people together and make a difference.",
        "icon": "https://i.postimg.cc/1Rgp3gJd/add-event.png"
    },
    {
        "id": 2,
        "title": "Participate in Social Good",
        "description": "Join meaningful activities like cleanup drives, tree plantations, and donations to give back to your community.",
        "icon": "https://i.postimg.cc/dVFd65wM/team.png"
    },
    {
        "id": 3,
        "title": "Easy Search & Filter",
        "description": "Quickly find events by name or type using our smart search and filtering system. Save your valuable time.",
        "icon": "https://i.postimg.cc/3xZGc2xk/search.png"
    },
    {
        "id": 4,
        "title": "Secure & Private Access",
        "description": "Your data is protected with authentication and JWT-based access control. Privacy is our priority.",
        "icon": "https://i.postimg.cc/5t7Cx1v1/padlock.png"
    }
]


const Feature = () => {
    return (
        <div className='max-w-7xl mx-auto p-4 mt-4 md:mt-8 rounded-xl'>
            <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className='text-2xl md:text-4xl text-teal-400 text-center py-4 md:py-8 font-bold'> Features That Make Us Unique </motion.h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {
                    features.map(feature => <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 5, ease: 'easeInOut' }}
                        className='shadow-lg p-6 bg-base-100 rounded-xl hover:scale-105 transition duration-300'
                        key={feature.id}>

                        <img className='w-24 h-24 mx-auto' src={feature.icon} alt="" />
                        <div className='text-center'>
                            <h1 className='text-xl font-bold py-4'>{feature.title}</h1>
                            <p className='text-sm'>{feature.description}</p>
                        </div>
                    </motion.div>)
                }
            </div>
        </div>
    );
};

export default Feature;