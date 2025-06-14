import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../contexts/AuthContext/AuthProvider';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';


const UpdateEvent = () => {

    const event = useLoaderData();
    const { user } = useContext(AuthContext);
    // const [eventDate, setEventDate] = useState(event?.eventDate);
    const { title, location, eventType, Descriptions, photoURL } = event;
    const navigate = useNavigate()

    console.log(event);

    const handleUpdateEvent = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form)
        const updateEventData = Object.fromEntries(formData.entries());
        console.log(updateEventData)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Update it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axios.put(`http://localhost:5000/eventUpdate/${event._id}`, updateEventData)
                    .then(result => {
                        if (result?.data.modifiedCount) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Your event has been updated successfully.",
                                showConfirmButton: false,
                                timer: 2000
                            });
                            navigate('/manageEvents')
                        }
                        else {
                            Swal.fire({
                                icon: "error",
                                title: "Oops...",
                                text: "You must have change at least one data for update!!!",
                                footer: '<a href="#">Why do I have this issue?</a>'
                            });
                        }
                    })
                    .catch(error => {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: `${error}`,
                            footer: '<a href="#">Why do I have this issue?</a>'
                        });
                    })


            }
        });
    }

    return (
        <div className='max-w-5xl mx-auto my-8 bg-base-300 rounded-2xl pt-8 px-2'>
            <h1 className='text-2xl md:text-4xl text-center font-bold text-teal-400 mb-8'>Update Your Event</h1>
            <form onSubmit={handleUpdateEvent}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Your Email</legend>
                        <input type="email" className="input w-full" name='creator' value={user?.email} />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Date</legend>
                        <DatePicker
                            selected={event?.eventDate}
                            // onChange={(date) => setEventDate(date)}
                            minDate={new Date()}
                            placeholderText='select a date'
                            withPortal
                            className="input w-full"
                            required
                        ></DatePicker>
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Title</legend>
                        <input type="text" className="input w-full" name='title' defaultValue={title} placeholder="Type event title" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Location</legend>
                        <input type="text" className="input w-full" name='location' defaultValue={location} placeholder="Location" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Event Type</legend>
                        <select defaultValue={eventType} name='eventType' className="select w-full">
                            <option disabled={true}>Event Type</option>
                            <option>Cleanup</option>
                            <option>Plantation</option>
                            <option>Donation</option>
                        </select>
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Image URL</legend>
                        <input type="text" className="input w-full" name='photoURL' defaultValue={photoURL} placeholder="Image URL" />
                    </fieldset>
                    <fieldset className="fieldset md:col-span-2">
                        <legend className="fieldset-legend">Descriptions</legend>
                        <textarea className="textarea resize-none w-full" rows={6} name='Descriptions' defaultValue={Descriptions} placeholder="write yur Descriptions"></textarea>
                    </fieldset>
                </div>
                <button type='submit' className="btn btn-success w-full mt-4 text-white">Save Changes</button>
            </form>
        </div>
    );
};

export default UpdateEvent;