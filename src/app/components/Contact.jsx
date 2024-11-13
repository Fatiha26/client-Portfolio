import React from "react";
import Line from "./Line";

import { FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa6";

const Contact = () => {
  return (
    <div id="contact" className="my-12">
      <h2 className="text-center text-3xl font-bold text-primary-600">
        Get in Touch
      </h2>
      <Line />

      <div className="md:flex justify-center items-center gap-40 py-4  w-4/5 mx-auto my-8 cursor-pointer bg-white text-black shadow shadow-secondary-200 hover:shadow-secondary-300 delay-75 rounded-md">
        <div className="flex items-center gap-3">
            <FaGithub className="text-4xl text-primary-400"/> 
            <span className="text-xl font-medium text-secondary-400">Github</span>
        </div>
        <div className="flex items-center gap-3">
            <FaLinkedin className="text-4xl text-primary-400"/> 
            <span className="text-xl font-medium text-secondary-400">LinkedIn</span>
        </div>
        <div className="flex items-center gap-3">
            <FaEnvelope className="text-4xl text-primary-400"/> 
            <span className="text-xl font-medium text-secondary-400">arjon16@cse.pstu.ac.bd</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
