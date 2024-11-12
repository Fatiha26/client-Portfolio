import Image from "next/image";
import React from "react";
import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa6";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="grid md:grid-cols-2 md:gap-4">
      <div className="relative">
        <Image
          src="/profile.png"
          width={200}
          height={0}
          alt="profile pic"
          className="w-full md:w-[590px] h-auto"
        ></Image>
        <a
          href="#"
          className="absolute md:bottom-20 bottom-5 right-4 md:right-[-60px] px-6 py-2 shadow-md  text-white  rounded-md
                    bg-primary-400 text-sm font-bold hover:shadow-secondary-300 delay-75 transition-all"
        >
          My Resume
        </a>
      </div>
      <div className="md:pr-12 px-4 md:px-0">
        <Navbar />
        <h1 className="text-4xl text-primary-600 font-bold md:mt-12">Hello</h1>
        <div className="flex items-center mt-4">
          <div className="w-4 bg-primary-600 h-1 mr-2 "></div>
          <h2 className="text-2xl text-primary-400 font-semibold">
            I&apos;m Arjon Golder
          </h2>
        </div>
        <p className="text-md my-4 w-full text-secondary-400 text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s.
        </p>
        <div className="flex mt-8 items-center animate-bounce">
          <a href="#" className=" text-md text-primary-600 font-semibold mr-2">
            Let’s Talk
          </a>
          <FaArrowRight className="text-primary-600 " />
        </div>
        <div className="flex items-center gap-2 mt-2">
          <FaGithub className="text-3xl" />
          <FaLinkedin className="text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default Header;
