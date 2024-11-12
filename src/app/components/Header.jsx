import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import Navbar from "./Navbar";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="relative">
        <Image
          src="/profile.png"
          width={700}
          height={0}
          alt="profile pic"
          className="w-[590px] h-auto"
        ></Image>
        <a
          href="#"
          className="absolute bottom-20 right-[-60px] px-8 py-2 bg-white border border-blue-200 rounded-md
                        text-blue-500 text-md font-semibold"
        >
          My Resume
        </a>
      </div>
      <div>
        <Navbar />
        <h1>Hello</h1>
        <span></span>
        <h2>I&apos;m Arjon Golder</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s.
        </p>
        <h3>Let’s Talk</h3>
        <FaArrowRight />
      </div>
    </div>
  );
};

export default Header;
