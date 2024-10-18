import { HandMetal, Leaf } from "lucide-react";
import Image from "next/image";
import React from "react";

const Logos = () => {
  const images = ["/giz.jpeg", "/land.jpg", "/R.png", "/di.jpeg", "/mm.png"];

  return (
    <div className="p-8 max-w-7xl mx-auto ">
         <div className="flex items-center flex-col md:flex-row">
        <h2 className="text-3xl flex-1  font-bold tracking-wide text-gray-800">
        Our Vision
        </h2>
        <p className="flex-1 text-gray-600">
        To lead technological innovation through research and development, turning emerging technologies into practical, scalable solutions.
        </p>
      </div>
     <div className=" flex items-center mt-24 gap-4 flex-wrap  justify-center ">
        {images.map((img) => (
          <span className="border p-1 justify-center items-center rounded-xl object-contain">
            <Image
              src={img}
              width={150}
              height={100}
              alt="Companies"
              className="max-h-18"
            />
          </span>
        ))}
      </div>
      <div className="bg-blue-50 mt-24 p-8 rounded-xl flex flex-col gap-6">
        <div className="mx-auto text-center max-w-lg flex  flex-col gap-2">
          <h1 className="text-4xl font-bold tracking-wider">
          Our Values
          </h1>
          <p className="text-gray-500">
            We offer innovative solutions that not only enhance environmental
            sustainability but also drive economic efficiency
          </p>
        </div>
        <div className="flex gap-4 flex-col md:flex-row  ">
          <div className="border p-4 hover:bg-gray-100 transition-all cursor-pointer bg-white flex flex-col gap-2 rounded-xl">
            <Leaf />
            <h1 className="text-lg font-bold">Integrity</h1>
            <p>
            We operate with transparency and accountability.
            </p>
          </div>

          <div className="border p-4 hover:bg-gray-100 transition-all cursor-pointer bg-white flex flex-col gap-2 rounded-xl">
            <Leaf />
            <h1 className="text-lg font-bold">Customer Focus</h1>
            <p>
            Our clients' needs are at the core of everything we do.
            </p>
          </div>

          <div className="border p-4 hover:bg-gray-100 transition-all cursor-pointer bg-white flex flex-col gap-2 rounded-xl">
            <Leaf />
            <h1 className="text-lg font-bold">Innovation</h1>
            <p>
            We constantly explore new ways to enhance our solutions <br />using emerging technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logos;
