import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div id='services' className="p-8 max-w-7xl mx-auto">
    <div className="flex items-center gap-4 flex-col md:flex-row">
      <h2 className="text-3xl w-52  font-bold tracking-wide text-gray-800">
        Providing best services
      </h2>
      <p className="flex-1 text-gray-600">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorem
        distinctio consectetur sequi. Sed quae eaque officia possimus
        quisquam at dignissimos magnam ipsam consequatur cum.
      </p>
    </div>
    <div className="flex flex-col gap-4 ">
      {[1, 2, 3].map(() => (
        <div className="border-b my-4 flex-col md:flex-row mt-6 border-gray-200 p-4 gap-4 flex items-center  justify-between">
          <span className="rounded-2xl overflow-hidden">
            <Image
              src={"https://fakeimg.pl/200x100"}
              width={200}
              height={100}
              alt="Logo goes here"
            />
          </span>

          <h1 className="text-xl font-bold ml-4 tracking-wider">
            Renewable Energy Solutions
          </h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ea
            rem quia a iste laudantium?
          </p>
          <span className="border p-2 rounded-full">
            <ArrowRight className="" />
          </span>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Services