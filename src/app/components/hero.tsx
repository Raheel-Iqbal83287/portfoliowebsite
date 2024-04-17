"use client";
import Link from "next/link";
import React from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div id="hero">
      <section className="text-gray-600 body-font bg-gray-300">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              I am RAHEEL IQBAL
              <br className="hidden lg:inline-block" />
              <Typewriter
                options={{
                  strings: [
                    "Front End Developer",
                    "Back End Developer",
                    "Full Stack Web Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <div className="w-[100px] h-[2px] bg-blue-700" />
            <p className="mb-8 leading-relaxed">
              <br />
              As a web developer, I seamlessly blend creativity with technical
              prowess, crafting digital landscapes that captivate and engage. My
              expertise extend beyond mere code; I possess an intuitive
              understanding of user experience, ensuring that every interface I
              create is not just functional, but delightful to navigate. My
              passion for innovation drive me to stay abreast of the latest
              technologies, constantly pushing boundaries to deliver
              cutting-edge solutions. With meticulous attention to detail, I
              transform concepts into sleek, responsive websites, each line of
              code a testament to my dedication to excellence. In the dynamic
              world of web development, I am a visionary, shaping the digital
              realm one keystroke at a time.
            </p>

            <p className="mb-8 leading-relaxed">
              As a seasoned web developer, my proficiency transcends
              conventional boundaries, delving into the realms of advanced
              programming paradigms and intricate architectural designs. My
              mastery of language like typescript enables me to architect
              complex web applications with seamless functionality and
              unparalleled efficiency. My expertise in framework like Next JS.js
              empowers me to craft dynamic user interfaces that respond
              intuitively to user interactions. I effortlessly navigate the
              intricacies of backend development, employing technologies such as
              Node.js to build robust server-side systems capable of handling
              immense traffic loads with grace.
            </p>

            <div className="flex justify-center">
              <Link href={"#contact"}>
                <button className="inline-flex text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Contact
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="/PHOTO-rb.png"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
