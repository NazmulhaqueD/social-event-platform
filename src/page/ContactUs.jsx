import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { FaWhatsapp } from 'react-icons/fa';
import { FaPhoneFlip } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify';

const ContactUs = () => {

    const handleEmailSubmit = (e) => {
        e.preventDefault();
        toast.success('Your email submitted successfully')
    }

    return (
        <div id='contact' className='max-w-7xl mx-auto min-h-[70vh] mb-8 rounded-lg p-4  my-8 flex flex-col items-center justify-center'>
            <div>
                <h1 className='text-center text-3xl lg:text-4xl text-teal-400 font-bold mb-16'>Contact Me</h1>
                <section className='w-full grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <aside className='space-y-6'>
                        <div className='bg-base-100 rounded-xl p-4 flex items-center gap-4'>
                            <p><MdEmail className='text-3xl md:text-5xl text-primary' /></p>
                            <article className='space-y-2'>
                                <h2 className='text-xl font-semibold '>Email</h2>
                                <p className='text-lg'>mdnajmulhaque982@gmail.com</p>
                            </article>
                        </div>
                        <div className='bg-base-100 rounded-xl p-4 flex items-center gap-4'>
                            <p><FaPhoneFlip className='text-3xl md:text-5xl text-primary' /></p>
                            <article className='space-y-2'>
                                <h2 className='text-xl font-semibold '>Phone</h2>
                                <p className='text-lg'>+880 13136 25224</p>
                            </article>
                        </div>
                        <div className='bg-base-100 rounded-xl p-4 flex items-center gap-4'>
                            <p><FaWhatsapp className='text-3xl md:text-5xl text-primary' /></p>
                            <article className='space-y-2'>
                                <h2 className='text-xl font-semibold '>WhatsApp</h2>
                                <p className='text-lg'>+880 13136 25224</p>
                            </article>
                        </div>
                        <div className='bg-base-100 rounded-xl p-4 flex items-center gap-4'>
                            <p><CiLocationOn className='text-3xl md:text-5xl text-primary' /></p>
                            <article className='space-y-2'>
                                <h2 className='text-xl font-semibold '>Location</h2>
                                <p className='text-lg'>Rangpur, Bangladesh</p>
                            </article>
                        </div>

                    </aside>
                    <aside className='bg-base-100 p-6 rounded-xl space-y-6 md:space-y-8'>
                        <input type="text" className='w-full outline-1 rounded-xl p-3 focus:outline-primary' placeholder='Enter Your email' />
                        <input type="text" className='w-full outline-1 rounded-xl p-3 focus:outline-primary' placeholder='Email Subject' />
                        <textarea className='w-full outline-1 rounded-xl p-3 focus:outline-primary resize-none' rows={6} name="" id="" placeholder='Enter your message '></textarea>
                        <input onClick={handleEmailSubmit} type="submit" value={'submit'} className='btn btn-primary w-full rounded-xl p-2' />
                    </aside>
                </section>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default ContactUs;