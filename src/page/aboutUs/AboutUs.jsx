import React from 'react';

const AboutUs = () => {
    return (
        <section className="bg-base-200 max-w-7xl mx-auto px-4 mb-8 py-8 rounded-xl shadow-lg">

            <h2 className="text-4xl font-bold text-center mb-6 text-teal-400">About Us</h2>
            <p className="text-center text-lg max-w-3xl mx-auto">
                Social Serve is a community-powered platform where individuals can join, host, and explore impactful social events like cleanups, plantations, and donation drives.
            </p>

            <div className="grid md:grid-cols-2 my-8 gap-6">
                <div className="bg-base-200 p-6 rounded-xl shadow-sm shadow-primary">
                    <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
                    <p>
                        To empower communities to take action for social good through easy access to meaningful events.
                    </p>
                </div>
                <div className="bg-base-200 p-6 rounded-xl shadow-sm shadow-primary">
                    <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
                    <p>
                        A connected world where everyone contributes to a cleaner, greener, and kinder society.
                    </p>
                </div>
            </div>

            <div className="bg-base-100 p-6 rounded-xl shadow-sm shadow-primary mb-12">
                <h3 className="text-2xl font-semibold mb-2 text-center">Our Journey</h3>
                <p className="text-gray-700 text-center max-w-3xl mx-auto">
                    We started as a small initiative in 2024 with a goal to bring together volunteers and organizers for real-world social impact. Today, we're growing rapidly with hundreds of events and thousands of participants across the country.
                </p>
            </div>

            {/* Impact Summary */}
            <div className="grid grid-cols-2 md:grid-cols-4 text-center mb-12 gap-6">
                <div>
                    <h4 className="text-3xl font-bold text-primary">120+</h4>
                    <p className="text-gray-600">Events</p>
                </div>
                <div>
                    <h4 className="text-3xl font-bold text-primary">300+</h4>
                    <p className="text-gray-600">Volunteers</p>
                </div>
                <div>
                    <h4 className="text-3xl font-bold text-primary">12+</h4>
                    <p className="text-gray-600">Cities</p>
                </div>
                <div>
                    <h4 className="text-3xl font-bold text-primary">5K+</h4>
                    <p className="text-gray-600">Participants</p>
                </div>
            </div>

            {/* CTA */}
            <div className="text-center">
                <button className="btn btn-primary px-8 text-lg">Join Us Now</button>
            </div>
        </section>
    );
};

export default AboutUs;
