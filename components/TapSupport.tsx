import { useState } from 'react';

function TapSupport () {
  const [openIndex, setOpenIndex] = useState(0); // To manage open accordion state

  const faqs = [
    {
      question: "Question One",
      answer:
        "Answer bla bla bla one.",
    },
    {
        question: "Question Two",
        answer:
          "Answer bla bla bla Two.",
    },
    {
        question: "Question Three",
        answer:
          "Answer bla bla bla Three.",
    },
    {
        question: "Question Four",
        answer:
          "Answer bla bla bla Four.",
    },
    {
        question: "Question Five",
        answer:
          "Answer bla bla bla Five.",
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
        <button className="px-6 py-3 bg-green-400 text-white text-lg font-semibold rounded-full hover:bg-green-500 transition duration-300">
          Contact Support →
        </button>
      </div>

      {/* Right Side Question Thing... */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border ${
              openIndex === index ? 'border-green-300 bg-green-50' : 'border-gray-300 bg-white'
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
