import { FaPlus } from "react-icons/fa";
const Faqs = () => {
  const faqs = [
    {
      question: "What is outreach AI?",
      answer:
        "Outreach AI is a platform that helps you automate your outreach process, saving you time and money.",
    },
    {
      question: "What is AI personalization?",
      answer:
        "Outreach AI is a platform that helps you automate your outreach process, saving you time and money.",
    },
    {
      question: "What's the impact of AI on prospecting?",
      answer:
        "Outreach AI is a platform that helps you automate your outreach process, saving you time and money.",
    },
    {
      question: "Can AI replace human interaction in outreach?",
      answer:
        "Outreach AI is a platform that helps you automate your outreach process, saving you time and money.",
    },
    {
      question: "How does AI improve outreach effectiveness?",
      answer:
        "Outreach AI is a platform that helps you automate your outreach process, saving you time and money.",
    },
    {
      question: "What are the benefits of using AI in outreach?",
      answer:
        "Outreach AI is a platform that helps you automate your outreach process, saving you time and money.",
    },
    {
      question: "Can AI help in optimizing outreach campaigns?",
      answer:
        "Outreach AI is a platform that helps you automate your outreach process, saving you time and money.",
    },
    {
      question: "How to generate personalized campaigns with lemlist AI?",
      answer:
        "Outreach AI is a platform that helps you automate your outreach process, saving you time and money.",
    },
  ];
  return (
    <div className="w-full max-w-7xl m-auto p-5 py-20 flex flex-col lg:flex-row justify-center items-start gap-20 ">
      <div className="bg-gradient-to-br from-white  to-gray-800 bg-clip-text text-transparent text-6xl font-bold py-5">
        <p className="">Frequently</p>
        <p className="">Asked</p>
        <p className="">Questions</p>
      </div>

      <div className="flex flex-col justify-start gap-5 w-full max-w-2xl">
        {faqs.map((faq, index) => {
          return (
            <div
              key={index + 1}
              className="bg-gray-100/10 rounded-xl w-full max-w-2xl"
            >
              <input
                className={`hidden peer`}
                type="checkbox"
                name="faqs"
                id={`q${index + 1}`}
              />
              <label htmlFor={`q${index + 1}`}>
                <div className="question bg-gradient-to-r from-indigo-900 to-[#0c0c21] p-[1px] rounded-xl cursor-pointer">
                  <div className="flex flex-row justify-between items-center p-5 rounded-xl bg-[#090725]">
                    <p className="">{faq.question}</p>
                    <FaPlus />
                  </div>
                </div>
              </label>
              <div className={`hidden peer-checked:block`}>
                <p className="p-5 ">{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faqs;
