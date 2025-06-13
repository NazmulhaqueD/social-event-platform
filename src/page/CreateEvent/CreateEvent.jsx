import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const CreateEvent = () => {

    const { user } = useContext(AuthContext);

    const [eventDate, setEventDate] = useState(null);

    const handleCreateEvent = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const eventsInfo = Object.fromEntries(formData.entries());
        eventsInfo.eventDate = eventDate;

        // Event data save in the mongodb database 
        axios.post('http://localhost:5000/events', eventsInfo)
            .then(result => {
                if (result?.data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: 'You are created a event successfully!!',
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
                console.log(result.data)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className='max-w-5xl mx-auto my-8 bg-base-300 rounded-2xl pt-8 px-2'>
            <h1 className='text-2xl md:text-4xl text-center font-bold text-teal-400 mb-8'>Create a New Event</h1>
            <form onSubmit={handleCreateEvent}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Your Email</legend>
                        <input type="email" className="input w-full" name='creator' value={user?.email} />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Date</legend>
                        <DatePicker
                            selected={eventDate}
                            onChange={(date) => setEventDate(date)}
                            minDate={new Date()}
                            withPortal 
                            className="input w-full"
                        ></DatePicker>
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Title</legend>
                        <input type="text" className="input w-full" name='title' placeholder="Type event title" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Location</legend>
                        <input type="text" className="input w-full" name='location' placeholder="Location" />
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
                        <input type="text" className="input w-full" name='photoURL' placeholder="Image URL" />
                    </fieldset>
                    <fieldset className="fieldset md:col-span-2">
                        <legend className="fieldset-legend">Descriptions</legend>
                        <textarea className="textarea resize-none w-full" rows={6} name='Descriptions' placeholder="write yur Descriptions"></textarea>
                    </fieldset>
                </div>
                <button type='submit' className="btn btn-accent w-full btn-sm mt-4 text-white">Post</button>
            </form>
        </div>
    );
};

export default CreateEvent;