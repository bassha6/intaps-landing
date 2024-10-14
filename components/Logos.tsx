import { Leaf } from "lucide-react";
import Image from "next/image";
import React from "react";

const Logos = () => {
  const images = ["/7.svg", "/2.svg", "/3.svg", "/4.svg", "/5.svg", "/6.svg"];

  return (
    <div className="p-8 max-w-7xl mx-auto ">
         <div className="flex items-center flex-col md:flex-row">
        <h2 className="text-3xl flex-1  font-bold tracking-wide text-gray-800">
          Investors & Partners
        </h2>
        <p className="flex-1 text-gray-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorem
          distinctio consectetur sequi. Sed quae eaque officia possimus quisquam
          at dignissimos magnam ipsam consequatur cum.
        </p>
      </div>
     <div className="flex items-center mt-24 gap-4 flex-wrap  justify-center ">
        {images.map((img) => (
          <span className="border p-4 rounded-xl ">
            <Image
              src={img}
              width={100}
              height={80}
              alt="Companies"
              className="max-h-18"
            />
          </span>
        ))}
      </div>
      <div className="bg-lime-50 mt-24 p-8 rounded-xl flex flex-col gap-6">
        <div className="mx-auto text-center max-w-lg flex  flex-col gap-2">
          <h1 className="text-4xl font-bold tracking-wider">
            Our main benefits
          </h1>
          <p className="text-gray-500">
            We offer innovative solutions that not only enhance environmental
            sustainability but also drive economic efficiency
          </p>
        </div>
        <div className="flex gap-4 flex-col md:flex-row  ">
          <div className="border p-4 hover:bg-gray-100 transition-all cursor-pointer bg-white flex flex-col gap-2 rounded-xl">
            <Leaf />
            <h1 className="text-lg font-bold">Innovative Green Technologies</h1>
            <p>
              Explore our cutting-edge solutions designed to reduce
              environmental impact and promote sustainability
            </p>
          </div>

          <div className="border p-4 hover:bg-gray-100 transition-all cursor-pointer bg-white flex flex-col gap-2 rounded-xl">
            <Leaf />
            <h1 className="text-lg font-bold">Innovative Green Technologies</h1>
            <p>
              Explore our cutting-edge solutions designed to reduce
              environmental impact and promote sustainability
            </p>
          </div>

          <div className="border p-4 hover:bg-gray-100 transition-all cursor-pointer bg-white flex flex-col gap-2 rounded-xl">
            <Leaf />
            <h1 className="text-lg font-bold">Innovative Green Technologies</h1>
            <p>
              Explore our cutting-edge solutions designed to reduce
              environmental impact and promote sustainability
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logos;
