import React from "react";
import { SiTypescript } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";

const Skills = () => {
  return (
    <div id="skills">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 pt-8">
              My Skills
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-700 text-white flex-shrink-0">
                    <SiTypescript />
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    TypeScript
                  </h2>
                </div>

                <div className="flex-grow">
                  <div className="h-1 w-full bg-gray-300 round-xl"></div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-700 text-white flex-shrink-0">
                    <SiNextdotjs />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Next JS
                  </h2>
                </div>

                <div className="flex-grow">
                  <div className="h-1 w-full bg-gray-300 round-xl"></div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-700 text-white flex-shrink-0">
                    <SiTailwindcss />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Tailwind CSS
                  </h2>
                </div>

                <div className="flex-grow">
                  <div className="h-1 w-full bg-gray-300 round-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
