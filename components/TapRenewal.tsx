export default function TapRenewal ()  {
  return (
    <section className=" p-10  m-4 flex justify-center items-center bg-gradient-to-r from-teal-800 to-green-900 rounded-lg">
      <div className="text-center px-4">
        {/* Heading */}
        <h1 className="text-5xl font-bold text-white">
          Renewal <span className="text-green-400">Now</span>
        </h1>
        {/* Subtitle */}
        <p className="mt-4 text-lg text-gray-300">
          By focusing on immediate action and sustainable practices,
          <br />
          we are dedicated to creating a cleaner, greener world today.
        </p>
        {/* Button */}
        <button className="mt-8 px-6 py-3 bg-green-400 text-white text-lg font-semibold rounded-full hover:bg-green-500 transition duration-300">
          Contact Us
        </button>
      </div>
    </section>
  );
};


