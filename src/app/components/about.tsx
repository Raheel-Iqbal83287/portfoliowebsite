import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src={require("../../../public/PHOTO-rb.png")}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 pt-8">
              About Me
            </h1>
            <p className="mb-8 leading-relaxed">
              Born and raised in the vibrant metropolis of Karachi, I possess a
              rich cultural heritage intertwined with the city's bustling
              energy. Educated in the esteemed institutions of Karachi, I have
              acquired a solid foundation of knowledge, culminating in
              impressive qualifications reflective of my dedication and
              intellect. Beyond academia, my true passion lies in leveraging
              technology to drive positive change, fueling my aspirations to
              contribute meaningfully to society. In my spare time, I immerse
              myself in a diverse array of hobbies, ranging from exploring the
              culinary delights of Karachi's bustling streets to delving into
              the intricacies of life. My interests span a wide spectrum, music,
              reading, travelling, programming, astronomy, philosophy,
              technology, physics, space and so on, reflecting a keen curiosity
              and a drive to make a difference in the world around me.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
