import { PhoneCall } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const NavBar = () => {
  return (
<div className=" p-4 bg-[#0E3E41]">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center flex-wrap justify-between gap-2">
            <Image
              src={"/logo2.svg"}
              width={125}
              height={125}
              alt="Logo goes here"
            />
            <div>
              <ul className="flex items-center gap-4 ">
                <a href='/' className="text-white font-bold tracking-wider cursor-pointer hover:text-opacity-85">
                  Home
                </a>
                <a href='/#services' className="text-white font-bold tracking-wider cursor-pointer hover:text-opacity-85">
                  Services
                </a>
                <a href='/works' className="text-white font-bold tracking-wider cursor-pointer hover:text-opacity-85">
                  Works
                </a>
                {/* <a href='about u' className="text-white font-bold tracking-wider cursor-pointer hover:text-opacity-85">
                  About us
                </a> */}
              </ul>
            </div>
            <a href='/contact-us' className="bg-[#44dd82] text-sm font-bold tracking-wide hover:bg-opacity-85 rounded-full p-2 text-white px-4 cursor-pointer ">
              Contact us
            </a>
          </nav>

        </div>
      </div>
  )
}

export default NavBar