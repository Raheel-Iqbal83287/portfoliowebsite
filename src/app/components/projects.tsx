
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <div id="projects">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 pt-8">
              My Projects
            </h1>
          </div>
          <div className="flex flex-wrap -m-8">
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/myfirstwebsitescreen.png"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-700 mb-1">
                    Simple Website
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    A simple website
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    A simple website which I developed using Next.js,
                    typescript, and Tailwind CSS for information relating to the
                    domain of Artificial Intelligence.
                  </p>
                  <Link
                    target="_blank"
                    href={"https://allaboutaidomain.vercel.app/"}
                  >
                    <p className="leading-relaxed text-blue-700 hover:underline">
                      View Project...
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/personalwebscreenshot.png"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-700 mb-1">
                    Portfolio Website
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    A simple portfolio website
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    A simple personal portfolio developed by using Next.js,
                    typescript, and Tailwind CSS regarding myself.
                  </p>
                  <Link
                    target="_blank"
                    href={"https://personalwebsite-my.vercel.app/"}
                  >
                    <p className="leading-relaxed text-blue-700 hover:underline">
                      View Project...
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/myfirstwebsitescreen.png"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-700 mb-1">
                    Simple Website
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    A simple website
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    A simple website which I developed using Next.js,
                    typescript, and Tailwind CSS for information relating to the
                    domain of Artificial Intelligence.
                  </p>
                  <Link
                    target="_blank"
                    href={"https://allaboutaidomain.vercel.app/"}
                  >
                    <p className="leading-relaxed text-blue-700 hover:underline">
                      View Project...
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
