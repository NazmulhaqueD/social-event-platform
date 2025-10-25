import React, { useEffect, useState } from "react";
import axios from "axios";
import Marquee from "react-fast-marquee";

const OurVolunteers = () => {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    axios
      .get("https://social-serve-server.vercel.app/volunteers")
      .then((res) => setVolunteers(res.data))
      .catch((err) => console.error(err));
  }, []);

  const firstRow = volunteers.slice(0, Math.ceil(volunteers.length / 2));
  const secondRow = volunteers.slice(Math.ceil(volunteers.length / 2));

  return (
    <section className="max-w-7xl mx-auto mt-8 p-4 rounded-xl overflow-hidden">
      <h2 className="text-2xl md:text-4xl text-teal-400 text-center py-4 font-bold">
        Our Volunteers
      </h2>

      {/* First Row - Left to Right */}
      <Marquee speed={40} gradient={false} pauseOnHover={true}>
        {firstRow.map((v) => (
          <div
            key={v._id}
            className="bg-base-100 mx-4 rounded-xl shadow-lg p-6 flex flex-col items-center min-w-[200px] hover:scale-105 transition-transform duration-300"
          >
            <img
              src={v.photo}
              alt={v.name}
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">{v.name}</h3>
            <p className="text-gray-500">{v.role}</p>
          </div>
        ))}
      </Marquee>

      {/* 🟢 Row gap added here */}
      <div className="my-6"></div>

      {/* Second Row - Right to Left */}
      <Marquee speed={40} gradient={false} direction="right" pauseOnHover={true}>
        {secondRow.map((v) => (
          <div
            key={v._id}
            className="bg-base-100 mx-4 rounded-xl shadow-lg p-6 flex flex-col items-center min-w-[200px] hover:scale-105 transition-transform duration-300"
          >
            <img
              src={v.photo}
              alt={v.name}
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">{v.name}</h3>
            <p className="text-gray-500">{v.role}</p>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default OurVolunteers;
