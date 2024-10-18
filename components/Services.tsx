import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div id='services' className="p-8 max-w-7xl mx-auto">
    <div className="flex items-center gap-4 flex-col md:flex-row justify-between">
      <h2 className="text-3xl w-52  font-bold tracking-wide text-gray-800">
      Our Services

      </h2>
      <p className="flex-1 text-gray-600">
        This are the main core Services that are provided by INTAPS
      </p>
    </div>
    <div className="flex flex-col gap-4 ">
    <div className="border-b my-4 flex-col md:flex-row mt-6 border-gray-200 py-4 px-1 gap-4 flex items-center  justify-between border">
          {/* <span className="rounded-2xl overflow-hidden">
            <Image
              src={"https://fakeimg.pl/200x100"}
              width={200}
              height={100}
              alt="Logo goes here"
            />
          </span> */}

          <h1 className="text-xl font-bold ml-4 tracking-wider">
          Custom Software Development
          </h1>
          <p className="text-gray-600">
          We design and implement tailored software solutions to meet the specific needs of organizations.

          </p>
          <span className="border p-2 rounded-full">
            <ArrowRight className="" />
          </span>
        </div>
    </div>
    <div className="flex flex-col gap-4 ">
    <div className="border-b my-4 flex-col md:flex-row mt-6 border-gray-200 py-4 px-1 gap-4 flex items-center  justify-between border">
          {/* <span className="rounded-2xl overflow-hidden">
            <Image
              src={"https://fakeimg.pl/200x100"}
              width={200}
              height={100}
              alt="Logo goes here"
            />
          </span> */}

          <h1 className="text-xl font-bold ml-4 tracking-wider">
          Flagship Products
          </h1>
          <p className="text-gray-600">
          We develop and deploy Enterprise Resource Planning (ERP) systems <br /> and other flagship solutions to drive digital transformation

          </p>
          <span className="border p-2 rounded-full">
            <ArrowRight className="" />
          </span>
        </div>
    </div>
  </div>
  )
}

export default Services