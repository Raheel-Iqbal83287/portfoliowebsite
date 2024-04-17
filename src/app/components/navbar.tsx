import Image from "next/image";
import Link from "next/link";
import React from "react";
//import { FaFileDownload } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="bg-white z-50 sticky top-0 shadow-lg hover:shadow-lg shadow-indigo-500/50">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center p-4">
            <Link href={"/"} className="mr-8 hover:text-blue-700 hover:subpixel-antialiased font-bold ">
              Home
            </Link>
            <Link href={"#about"} className="mr-8 hover:text-blue-700 hover:subpixel-antialiased font-bold">
              About
            </Link>
            <Link href={"#skills"} className="mr-8 hover:text-blue-700 hover:subpixel-antialiased font-bold">
              Skills
            </Link>
            <Link href={"#projects"} className="mr-8 hover:text-blue-700 hover:subpixel-antialiased font-bold">
              Projects
            </Link>
            <Link href={"#contact"} className="mr-8 hover:text-blue-700 hover:subpixel-antialiased font-bold">
              Contact
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
