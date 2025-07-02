import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Loader from '../../components/Loader';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';


const CreateEvent = () => {

    const { user } = useContext(AuthContext);
    const [loader, setLoader] = useState(false);
    const [eventDate, setEventDate] = useState(null);
    const navigate = useNavigate();

    const handleCreateEvent = (e) => {
        setLoader(true);
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const eventsInfo = Object.fromEntries(formData.entries());
        eventsInfo.eventDate = eventDate;
        eventsInfo.postDate = new Date();

        axios.post('https://social-serve-server.vercel.app/events', eventsInfo, {

            headers: { Authorization: `Bearer ${user?.accessToken}` }
        })
            .then(result => {
                if (result?.data.insertedId) {
                    setLoader(false)
                    navigate('/manageEvents');
                    Swal.fire({
                        icon: "success",
                        title: 'You are created a event successfully!!',
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            })
            .catch(error => {
                toast(error.message)
            })
    }

    return (
        <div className={`my-8 bg-base-300 rounded-xl py-8 px-2 md:px-4 relative ${loader ? 'opacity-50' : 'opacity-100'}`}>
            <h1 className='text-2xl md:text-4xl text-center font-bold text-teal-400 mb-8'>Create a New Event</h1>
            <div className='max-w-5xl mx-auto p-4 rounded-2xl bg-base-200 shadow'>
                <form onSubmit={handleCreateEvent}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Your Email</legend>
                            <input type="email" className="input w-full" required name='creator' value={user?.email} />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Date</legend>
                            <DatePicker
                                selected={eventDate}
                                onChange={(date) => setEventDate(date)}
                                minDate={new Date()}
                                placeholderText='select a date'
                                withPortal
                                className="input w-full"
                                required
                            ></DatePicker>
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Title</legend>
                            <input type="text" className="input w-full" required name='title' placeholder="Type event title" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Location</legend>
                            <input type="text" className="input w-full" required name='location' placeholder="Location" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Event Type</legend>
                            <select defaultValue="Pick a color" name='eventType' className="select w-full">
                                <option disabled={true}>Event Type</option>
                                <option>Cleanup</option>
                                <option>Plantation</option>
                                <option>Donation</option>
                            </select>
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Image URL</legend>
                            <input type="text" className="input w-full" required name='photoURL' placeholder="Image URL" />
                        </fieldset>
                        <fieldset className="fieldset md:col-span-2">
                            <legend className="fieldset-legend">Descriptions</legend>
                            <textarea className="textarea resize-none w-full" rows={6} required name='Descriptions' placeholder="write yur Descriptions"></textarea>
                        </fieldset>
                    </div>
                    <button type='submit' className="btn btn-accent w-full btn-sm mt-4 text-white">Post</button>
                </form>
            </div>
            {
                loader ?
                    <div className='absolute top-1/2 left-1/2 -translate-1/2'>
                        <Loader></Loader>
                    </div> : ''
            }

        </div>
    );
};

export default CreateEvent;