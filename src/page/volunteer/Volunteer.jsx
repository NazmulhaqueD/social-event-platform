import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext/AuthProvider';
import axios from 'axios';
import { toast } from 'react-toastify';

const Volunteer = () => {

    const { user, setLoading, loading } = useContext(AuthContext);
    console.log(loading);

    const handleApplicationOfVolunteer = (e) => {
        setLoading(true);
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const volunteerData = Object.fromEntries(formData.entries());

        volunteerData.date = new Date();
        volunteerData.photo = user?.photoURL;
        console.log(volunteerData);

        axios.post('https://social-serve-server.vercel.app/volunteers', volunteerData)
            .then(result => {
                if (result?.data.insertedId) {
                    setLoading(false)
                    toast.success("Now You Are a Volunteer in The Social Serve")
                }
                console.log(result.data)
            })
            .catch(error => {
                toast.error(error)
            })

    }

    return (
        <div className='max-w-7xl mx-auto mt4 md:mt-8 p-4 rounded-xl'>
            <section className="w-full mx-auto px-4 py-12">
                <h2 className="text-4xl font-bold text-center mb-6 text-teal-400">Become a Volunteer</h2>
                <p className="text-center mb-10">
                    Want to make a difference? Join our team of amazing volunteers and be part of meaningful change.
                </p>


                <div className="grid md:grid-cols-2 gap-4 mb-10">
                    <div className="bg-base-200 p-4 rounded-xl shadow-sm shadow-primary">
                        <h3 className="font-bold mb-2 text-xl">Why Volunteer?</h3>
                        <ul className="list-disc list-inside text-lg space-y-1">
                            <li>Make a real impact in your community</li>
                            <li>Gain experience & skills</li>
                            <li>Meet like-minded people</li>
                            <li>Certificates and recognition</li>
                        </ul>
                    </div>
                    <div className="bg-base-200 p-4 rounded-xl shadow-sm shadow-primary">
                        <h3 className="font-bold mb-2 text-xl">Volunteer Roles</h3>
                        <ul className="list-disc list-inside text-lg space-y-1">
                            <li>Event Organizer</li>
                            <li>Cleanup Assistant</li>
                            <li>Tree Plantation Lead</li>
                            <li>Donor Coordinator</li>
                        </ul>
                    </div>
                </div>


                <form onSubmit={handleApplicationOfVolunteer} className="bg-base-100 p-6 rounded-xl shadow-sm space-y-4 shadow-primary">
                    <div className="grid md:grid-cols-2 gap-4">
                        <input type="text" placeholder="Full Name" name='name' value={user?.displayName} className="input input-bordered w-full" required />
                        <input type="email" placeholder="Email Address" name='email' value={user?.email} className="input input-bordered w-full" required />
                    </div>
                    <div>
                        <fieldset className="fieldset w-full">
                            <legend className="fieldset-legend">Volunteer Role</legend>
                            <select defaultValue="Pick a browser" name='role' className="select w-full">
                                <option disabled={true}>Pick a Role</option>
                                <option>Social Media Manager</option>
                                <option>Content Writer</option>
                                <option>Backend Developer</option>
                                <option>Event Coordinator</option>
                                <option>Community Manager</option>
                                <option>Community Manager</option>
                            </select>
                        </fieldset>
                    </div>
                    <div>
                        <textarea className="textarea textarea-bordered w-full" name='message' placeholder="Why do you want to volunteer?" rows="4" required></textarea>
                    </div>
                    <div className='flex justify-center'>
                        <button type="submit" className="btn btn-primary">Submit Application</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Volunteer;
