import { Link } from "lucide-react";

const TapWorks = () => {
  const cardData = [
    {
      name: "Water Supply Information System (WSIS)",
      description:
        "WSIS is implemented in over 30 locations across Ethiopia, providing comprehensive water utility management",
      link: "intasp.com",
      icon: "💧",
    },
    {
      name: "National Rural Land Administration Information System (NRLAIS)",
      description:
        " NRLAIS, under the supervision of the Ministry of Agriculture, has facilitated over one million rural land transactions and has made land ownership less burdensome for the Ethiopian farmer.",
      link: "intaps.com",
      icon: "🦗",
    },
    {
      name: "Cadaster Information System (CIS)",
      description:
        "CIS is aleading cadaster management system in Ethiopia, providing a comprehensive solution for managing fiscal and legal land records",
      link: "intaps.com",
      icon: "🎥",
    },
    {
      name: "Water Utility Management Information System (WUMIS)",
      description:
        "Financed by the World Bank and developed in collaboration with two industry-leading partners for the Ministry of Water and Energy, WUMIS is currently operational in 22 cities.",
      link: "intaps.com",
      icon: "🛰️",
    },
    {
      name: "Commercial Agricultural Management Information System (CAMIS)",
      description:
        "CAMIS is operational across three Ethiopian regions under GIZ supervision. It provides a centralized platform for managing commercial farming activities, consolidating data on farm operations, financial transactions, and production metrics to optimize productivity and ensure compliance with agricultural standards.",
      link: "intaps.com",
      icon: "🚀",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mt-10">
        <h1 className="text-5xl font-semibold text-gray-800 p-10">
          {" "}
          Things INTAPS made trying to put <br /> our dent in the Community.{" "}
        </h1>
        <h4 className="text-gray-600 pl-10 flex-wrap w-[46rem] ">
          We have worked on noticeable Mega projects over the course of 17 years but these are
          the ones that we are most proud of. </h4>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="flex items-start p-4 bg-white hover:bg-blue-50 cursor-pointer rounded-lg hover:shadow-sm"
          >
            <div className="ml-4">
              {/* <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full mb-4">
                <span className="text-2xl ">{card.icon}</span>
              </div> */}
              <h3 className="text-lg font-semibold mb-4">{card.name}</h3>
              <p className="text-gray-500  mb-4">{card.description}</p>
              <a href="#" className="flex items-center gap-2 text-blue-500 hover:underline">
                <Link/>
                {card.link}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TapWorks;
