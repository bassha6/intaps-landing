import { Link } from "lucide-react";

const TapWorks = () => {
  const cardData = [
    {
      name: "Work One",
      description:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Mus malesuada ante diam et dignissim. Sodales hac in facilisis sagittis mattis gravida congue lectus. Condimentum fringilla ligula praesent lacinia sem a. Curabitur congue duis purus ultrices.",
      link: "workone.com",
      icon: "🌌",
    },
    {
      name: "Work Two",
      description:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Pulvinar felis conubia platea elit; sociosqu etiam efficitur. Dolor ridiculus laoreet nec sagittis praesent dictum. Nisi ridiculus praesent faucibus diam montes volutpat viverra.",
      link: "worktwo.com",
      icon: "🌊",
    },
    {
      name: "Work Three",
      description:
        "Hendrerit tincidunt sit mus, quisque nulla varius sodales iaculis pharetra. Quis porttitor sapien tempor congue; fusce proin velit a. Quam placerat quisque libero porta; tempus mauris magnis. ",
      link: "workthree.com",
      icon: "🎥",
    },
    {
      name: "Work Four",
      description:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Cubilia habitant risus torquent enim ex? Hendrerit blandit blandit sociosqu mauris adipiscing mauris fames.",
      link: "workfour.com",
      icon: "🛰️",
    },
    {
      name: "Work Five",
      description:
        "Eu mus ornare aliquet maximus lobortis. Conubia lectus hendrerit eros eu litora suspendisse. Morbi mi magna penatibus vestibulum pretium dolor. ",
      link: "workfive.com",
      icon: "🚀",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mt-10">
        <h1 className="text-5xl font-semibold text-gray-800 p-10">
          {" "}
          Things InTaps made trying to put <br /> our dent in the Community.{" "}
        </h1>
        <h4 className="text-gray-600 pl-10 flex-wrap w-[46rem] ">
          We have worked on tons of Mega projects over the years but these are
          the ones that we are most proud of. Many of them are open-source, so
          if you see something that piques your interest,{" "}
          <a href="" className="text-green-500">
            contact us
          </a>{" "}
          now
        </h4>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="flex items-start p-4 bg-white hover:bg-green-50 cursor-pointer rounded-lg hover:shadow-sm"
          >
            <div className="ml-4">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full mb-4">
                <span className="text-2xl ">{card.icon}</span>
              </div>
              <h3 className="text-lg font-semibold mb-4">{card.name}</h3>
              <p className="text-gray-500  mb-4">{card.description}</p>
              <a href="#" className="flex items-center gap-2 text-green-500 hover:underline">
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
