import React from 'react'

const Hero = ({
    title = "Welcome to Wisdom Anosike's Portfolio",
    subtitle = "Crafting intuitive and modern web experiences with React and Tailwind CSS",
    description = "I am a passionate Frontend Developer specializing in creating responsive, user-friendly websites that bring ideas to life.",
  }) => {
    return (
      <>
        <section className="bg-gray-700 py-20 mb-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
                {title}
              </h1>
              <p className="my-4 text-xl text-white">{subtitle}</p>
              <p className="mt-2 text-lg text-indigo-200">{description}</p>
            </div>
          </div>
        </section>
      </>
    );
  };
  
  export default Hero;
  