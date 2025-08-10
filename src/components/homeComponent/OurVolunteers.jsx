import React from "react";

const volunteers = [
    {
        id: 1,
        name: "Md. Nazmul Haque",
        role: "Team Leader",
        image:
            "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        id: 2,
        name: "Sakib Hasan",
        role: "Developer",
        image:
            "https://randomuser.me/api/portraits/men/65.jpg",
    },
    {
        id: 3,
        name: "Fatima Akter",
        role: "Designer",
        image:
            "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        id: 4,
        name: "Rafiq Islam",
        role: "Content Writer",
        image:
            "https://randomuser.me/api/portraits/men/85.jpg",
    },
];

const OurVolunteers = () => {
    return (
        <section className="max-w-7xl mx-auto mt-8 p-4 rounded-xl">
            <h2 className="text-2xl md:text-4xl text-teal-400 text-center py-8 font-bold">
                Our Volunteers
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {volunteers.map((volunteer) => (
                    <div
                        key={volunteer.id}
                        className="bg-base-100 rounded-xl shadow-lg p-6 flex flex-col items-center"
                    >
                        <img
                            src={volunteer.image}
                            alt={volunteer.name}
                            className="w-24 h-24 rounded-full object-cover mb-4"
                        />
                        <h3 className="text-xl font-semibold">
                            {volunteer.name}
                        </h3>
                        <p className="">{volunteer.role}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurVolunteers;
