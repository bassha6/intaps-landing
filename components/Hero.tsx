import { Map, PhoneCall, Mail, Clock } from "lucide-react";
import Image from "next/image";
import React from "react";

const Card = ({ icon: Icon, title, content, color, rotation }) => (
  <div
    className={`space-y-2 ${color} cursor-pointer hover:scale-45 transition-all w-52 mx-auto text-white p-4 rounded-xl absolute ${rotation}`}
    style={{ transform: `rotate(${rotation}deg)` }}
  >
    <Icon className="w-6 h-6" />
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-white/80">{content}</p>
  </div>
);

const StackedCards = ({ cards }) => (
  <div className="relative w-52 h-44">
    {cards.map((card, index) => (
      <Card key={index} {...card} rotation={index % 2 === 0 ? -3 : 3} />
    ))}
  </div>
);

const Hero = () => {
  const cards = [
    {
      icon: Map,
      title: "Our Address",
      content: "Wossen, CMC\nAddis Ababa, Ethiopia",
      color: "bg-lime-500",
    },
    {
      icon: PhoneCall,
      title: "Phone",
      content: "+251 911 123 456\n +251 911 789 012",
      color: "bg-yellow-500",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@example.com\nsupport@example.com",
      color: "bg-sky-500",
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "Mon-Fri: 9AM - 5PM\nSat: 4AM - 2PM",
      color: "bg-rose-500",
    },
  ];

 
  return (
    <div className="p-8 bg-[#0E3E41] relative min-h-screen">
      {/* <div className="flex flex-wrap gap-2 mx-auto items-center justify-center">
        {[0, 1, 2, 3].map((index) => (
          <div key={index} className={`lg:absolute ${getPosition(index)}`}>
            <StackedCards cards={[cards[index], cards[index % 4]]} />
          </div>
        ))}
      </div> */}

      <div id="home" className="p-8 max-w-7xl mx-auto h-full">
        <div className="flex flex-col gap-4 items-center justify-center flex-1 mt-24">
          
          <h1 className="text-6xl font-bold flex flex-col text-white text-center">
            We are building a
            <span className="text-transparent bg-gradient-to-tl bg-clip-text from-[#4AEF8A] to-[#A7DA89] font-bold">
              Sustainable Future
            </span>
          </h1>
          <p className="text-white/80 text-center">
            Committed to innovative practices and eco-friendly solutions
          </p>
          <button className="bg-[#44dd82] flex items-center gap-2 mx-auto mt-4 text-sm font-bold tracking-wide hover:bg-opacity-85 rounded-full p-4 text-white px-4 cursor-pointer">
            Call us for free consultation <PhoneCall className="w-4 h-4" />
          </button>
          <div className="flex flex-col gap-2 mt-4">
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

const getPosition = (index) => {
  const positions = [
    "top-[8rem] left-[8rem]",
    "bottom-[8rem] left-[8rem]",
    "top-[8rem] right-[8rem]",
    "bottom-[8rem] right-[8rem]",
  ];
  return positions[index];
};

export default Hero;
