import React from "react";
import Line from "./Line";
import { aboutData } from "../data/about";
const Who = () => {
  return (
    <div className="px-16 py-4 mt-12">
      <h2 className="text-center text-3xl font-bold text-primary-600">
        Who am I?
      </h2>
      <Line />
      <div className="grid grid-cols-2 my-12 gap-4">
        <div>
          <p className="text-sm text-primary-600">About me</p>
          <p className="text-xl mt-1 mb-3 font-semibold text-primary-400">Arjon Golder’s Details</p>
          <p className="text-md text-justify text-black mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s.
          </p>
          <a
            href="#"
            className="px-4 py-2 shadow-md border  bg-white shadow-secondary-200 rounded-md
                        text-primary-400 text-sm font-semibold hover:shadow-secondary-300 delay-75 transition-all"
          >
            Explore
          </a>
        </div>
        <div className="grid grid-cols-2 gap-4 px-4">
        {aboutData.map((item, index) => (
            <div key={index} className="p-4 h-24 text-center flex flex-col justify-between bg-white shadow-md shadow-secondary-300 rounded-md">
              <p className="text-md text-primary-600 font-bold">{item.post}</p>
              <p className="text-sm leading-none">{item.loc}</p>
              <p className="text-sm leading-none">{item.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Who;
