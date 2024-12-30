import React from "react";
import wise from "../assets/images/wise.jpg";
import Card from "./Card";
import { Link } from "react-router-dom";

const HomeCard = () => {
  return (
    <>
      <section className="py-4">
        <div className="container-xl lg:container m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            <Card className="max-w-sm mx-auto shadow-lg rounded-lg overflow-hidden mt-6">
              <img
                src={wise}
                alt="Portfolio Display"
                className="w-full h-64 object-cover"
              />
              <h2 className="text-2xl font-bold text-gray-800">
                Wisdom Anosike 😎
              </h2>
              <p className="text-gray-600 mt-2 mb-4">
                Frontend Developer specializing in React, Tailwind CSS, and
                modern UI/UX design.
              </p>

              <Link
                to="/projects"
                className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
              >
                View Projects
              </Link>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeCard;
