import React from "react";
import Line from "./Line";
import { projectData } from "../data/project";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="px-16 py-4" id="project">
      <h2 className="text-center text-3xl font-bold text-primary-600">
        Recent Projects
      </h2>
      <Line />
      <div className="grid md:grid-cols-3 gap-8 my-8">
        {projectData.map((item, index) => (
          <div
            key={index}
            className="cursor-pointer bg-white shadow-md shadow-secondary-200 hover:shadow-secondary-300 delay-75 rounded-md"
          >
            <Image
              src={item.img}
              width={300}
              height={100}
              alt="blog one"
              className="w-full"
            />
            <div className="p-4">
              <h3 className="text-md text-primary-400 font-semibold">
                {item.title}
              </h3>
              <p className="text-justify text-sm my-2 mb-4 text-secondary-400">
                {item.para}
              </p>
              <div className="flex gap-4 justify-center">
              <a
                href="#"
                className="px-6 py-2 shadow-md  text-white  rounded-md
                    bg-primary-400 text-sm font-bold hover:shadow-secondary-300 delay-75 transition-all"
              >
                {item.btn}
              </a>
              <a
                href="#"
                className="px-6 py-2 shadow-md  text-white  rounded-md
                    bg-primary-400 text-sm font-bold hover:shadow-secondary-300 delay-75 transition-all"
              >
                {item.btn2}
              </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
