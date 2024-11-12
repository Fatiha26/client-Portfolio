import React from "react";
import Line from "./Line";
import { blogData } from "../data/blog";
import Image from "next/image";

const Blogs = () => {
  return (
    <div className="px-16 py-4" id="blog">
      <h2 className="text-center text-3xl font-bold text-primary-600">
        My Blogs
      </h2>
      <Line />
      <div className="grid md:grid-cols-3 gap-8 my-8">
        {blogData.map((item, index) => (
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
              <a
                href="#"
                className="px-6 py-2 shadow-md  text-white  rounded-md
                    bg-primary-400 text-sm font-bold hover:shadow-secondary-300 delay-75 transition-all"
              >
                {item.btn}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
