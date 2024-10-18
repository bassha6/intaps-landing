import { useState } from 'react';

function TapSupport () {
  const [openIndex, setOpenIndex] = useState(0); // To manage open accordion state

  const faqs = [
    {
      question: "About INTAPS?",
      answer:
        "At INTAPS Consultancy PLC, we leverage advanced technology to help public and private sector organizations transform their operations. With over 17 years of experience, we are at the forefront of digital transformation in Ethiopia, driving innovation and simplifying complex processes. INTAPS is a market leader in providing software solutions that boost efficiency and offer strategic advantages.",
    },
    {
        question: "Where Is It Located?",
        answer:
          "INTAPS Consultancy PLC is Located in AddisAbaba,Ethiopia around Wosen next to Aselefech Merga Hotel. ",
    },
    {
        question: "What are the Contact Information?",
        answer:
          "INTAPS Consultancy PLC is available at this phone lines: +251-91320 0500 or +251-116604088",
    },
    {
        question: "How Long Have You Been On The Market?",
        answer:
          "INTAPS Consultancy PLC is working on software development for over 17 years!",
    },
  ];

  const openDivAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="flex flex-col md:flex-row items-start justify-between p-10 bg-white">
      {/* Left Side */}
      <div className="md:w-1/2">
        <h1 className="text-4xl font-bold text-black mb-4">We Have 24/7 Support Available</h1>
        <p className="text-gray-500 mb-8">In case you are still looking for answers.</p>
        <button className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-full hover:bg-transparent hover:border hover:text-blue-700 hover:shadow-sm transition duration-300">
          Contact Support →
        </button>
      </div>

      {/* Right Side Question Thing... */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border ${
              openIndex === index ? 'border-blue-300 bg-blue-50' : 'border-blue-300 bg-white'
            } rounded-lg mb-4 shadow-sm`}
          >
            <button
              onClick={() => openDivAnswer(index)}
              className="w-full text-left p-4 text-black font-medium flex justify-between items-center"
            >
              {faq.question}
              <span className={`${openIndex === index ? 'transform rotate-180' : ''} transition`}>
                ⌄
              </span>
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 text-gray-600">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TapSupport;
