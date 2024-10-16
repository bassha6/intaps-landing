import { PhoneCall } from "lucide-react";
import Image from "next/image";
import React from "react";

const NavBar = () => {
  const address = {
    icon: Map,
    title: "Our Address",
    content: "Wossen, CMC\nAddis Ababa, Ethiopia",
    color: "bg-lime-500",
  };

  return (
    <div className=" p-4">
      <div className="max-w-7xl mx-auto">
        <nav className="flex items-center flex-wrap justify-between gap-2">
          <Image
            src={"/Intaps_logo.png"}
            width={125}
            height={125}
            alt="Logo goes here"
          />
          <div className=" md:ml-44 flex items-center justify-center">
            <ul className="flex items-center gap-4 ">
              <a
                href="/"
                className="text-gray-800 font-bold tracking-wider cursor-pointer hover:text-opacity-85"
              >
                Home
              </a>
              <a
                href="/#services"
                className="text-gray-800 font-bold tracking-wider cursor-pointer hover:text-opacity-85"
              >
                Services
              </a>
              <a
                href="/works"
                className="text-gray-800 font-bold tracking-wider cursor-pointer hover:text-opacity-85"
              >
                Works
              </a>
              {/* <a href='about u' className="text-white font-bold tracking-wider cursor-pointer hover:text-opacity-85">
                  About us
                </a> */}
            </ul>
          </div>
          <div className="items-center gap-2 text-gray-900">
              <span className="">{address.content}</span>
              <div className="flex font-bold"><p className="hover:underline cursor-pointer">+251-913200500 || </p> <p className="hover:underline cursor-pointer"> +251-116604088</p></div>
            {/* <a
              href="/contact-us"
              className="bg-[#44dd82] text-sm font-bold tracking-wide hover:bg-opacity-85 rounded-full p-2 text-white px-4 cursor-pointer "
            >
              Contact us
            </a> */}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
