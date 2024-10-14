import { PhoneCall } from "lucide-react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="p-8 bg-[#0E3E41]">
      <div id="home" className="p-8 max-w-7xl mx-auto  h-full">
        <div className="flex flex-col gap-4 items-center justify-center flex-1 mt-24">
          <h1 className="text-6xl font-bold flex flex-col text-white">
            We are building a
            <span className="text-transparent bg-gradient-to-tl bg-clip-text from-[#4AEF8A] to-[#A7DA89] font-bold">
              Sustainable Future
            </span>
          </h1>
          <p className="text-white/80">
            Committed to innovate practices and eco-friendly solutions
          </p>
          <button className="bg-[#44dd82] flex items-center gap-2 mx-auto mt-4 text-sm font-bold tracking-wide hover:bg-opacity-85 rounded-full p-2 text-white px-4 cursor-pointer ">
            Call us for free consultation <PhoneCall />
          </button>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 flex-wrap mx-auto items-center justify-center">
              <Image
                src={"https://fakeimg.pl/400x600"}
                width={300}
                height={150}
                alt="Logo goes here"
              />
              <Image
                src={"https://fakeimg.pl/400x600"}
                width={300}
                height={150}
                alt="Logo goes here"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
