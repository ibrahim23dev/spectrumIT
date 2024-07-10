import React, { useState, useEffect } from "react";
import faqs from "../assets/faqs.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000, // You can adjust the duration as needed
    });
  }, []);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-[120px]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-12 md:gap-[100px]">
          <div className="md:col-span-5">
            <div className="mb-12 md:mb-[60px]" data-aos="fade-up">
              <h3 className="text-2xl md:text-[37px] font-semibold mb-4 md:mb-[10px]">
                সচরাচর জিজ্ঞাসা
              </h3>
              <p>
                ট্রেডিং কর্পোরেশন অব বাংলাদেশ (টিসিবি) এর কার্ড সম্পর্কিত
                বিভিন্ন প্রশ্ন এর উত্তর দেখুনঃ-ড জানিয়ে দেয়া হবে।
              </p>
            </div>
            <div className="w-[75%] mx-auto md:mx-0" data-aos="fade-up" data-aos-delay="100">
              <img src={faqs} alt="FAQs" className="w-full" />
            </div>
          </div>

          <div className="md:col-span-7">
            <div id="accordion-flush">
              {faqData.map((faq, index) => (
                <div key={index} data-aos="fade-up" data-aos-delay={`${200 * (index + 1)}`}>
                  <h2 id={`accordion-flush-heading-${index}`}>
                    <button
                      type="button"
                      className="flex items-center justify-between w-full py-4 md:py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                      onClick={() => handleToggle(index)}
                      aria-expanded={activeIndex === index}
                      aria-controls={`accordion-flush-body-${index}`}
                    >
                      <span>{faq.question}</span>
                      <svg
                        data-accordion-icon
                        className={`w-3 h-3 ${
                          activeIndex === index ? "rotate-180" : ""
                        } shrink-0`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5 5 1 1 5"
                        />
                      </svg>
                    </button>
                  </h2>
                  <div
                    id={`accordion-flush-body-${index}`}
                    className={`${
                      activeIndex === index ? "block" : "hidden"
                    }`}
                    aria-labelledby={`accordion-flush-heading-${index}`}
                  >
                    <div className="py-4 md:py-5 border-b border-gray-200 dark:border-gray-700">
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const faqData = [
  {
    question: "টিসিবি স্মার্ট ফ্যামিলি কার্ড এর জন্য কিভাবে নিবন্ধিত হওয়া যায়?",
    answer:
      "টিসিবির স্মার্ট ফ্যামিলি কার্ড এর জন্য আপনার এলাকার স্থানীয় প্রতিনিধি অর্থাৎ মেয়র/কাউন্সিলর/চেয়ারম্যান এর কার্যালয়ের আবেদন করা যায়। এটি নিম্ন আয়ের পরিবারের জন্য প্রযোজ্য।",
  },
  {
    question:
      "টিসিবি স্মার্ট ফ্যামিলি কার্ডের জন্য নিবন্ধিত হতে কি কোনো ফি / টাকা দিতে হয়?",
    answer:
      "টিসিবির স্মার্ট ফ্যামিলি কার্ড এর জন্য আপনার এলাকার স্থানীয় প্রতিনিধি অর্থাৎ মেয়র/কাউন্সিলর/চেয়ারম্যান এর কার্যালয়ের আবেদন করা যায়। এটি নিম্ন আয়ের পরিবারের জন্য প্রযোজ্য।",
  },
  {
    question:
      "টিসিবি স্মার্ট ফ্যামিলি কার্ডের জন্য নিবন্ধিত হতে সবচেয়ে গুরুত্বপূর্ণ তথ্য দু’টি কি কি?",
    answer:
      "টিসিবির স্মার্ট ফ্যামিলি কার্ড এর জন্য আপনার এলাকার স্থানীয় প্রতিনিধি অর্থাৎ মেয়র/কাউন্সিলর/চেয়ারম্যান এর কার্যালয়ের আবেদন করা যায়। এটি নিম্ন আয়ের পরিবারের জন্য প্রযোজ্য।",
  },
  {
    question:
      "এক পরিবারে কতজন টিসিবি স্মার্ট ফ্যামিলি কার্ডের জন্য নিবন্ধিত হতে পারবে?",
    answer:
      "টিসিবির স্মার্ট ফ্যামিলি কার্ড এর জন্য আপনার এলাকার স্থানীয় প্রতিনিধি অর্থাৎ মেয়র/কাউন্সিলর/চেয়ারম্যান এর কার্যালয়ের আবেদন করা যায়। এটি নিম্ন আয়ের পরিবারের জন্য প্রযোজ্য।",
  },
  {
    question:
      "টিসিবি স্মার্ট ফ্যামিলি কার্ড কখন এবং কোথা থেকে সংগ্রহ করা যাবে?",
    answer:
      "টিসিবির স্মার্ট ফ্যামিলি কার্ড এর জন্য আপনার এলাকার স্থানীয় প্রতিনিধি অর্থাৎ মেয়র/কাউন্সিলর/চেয়ারম্যান এর কার্যালয়ের আবেদন করা যায়। এটি নিম্ন আয়ের পরিবারের জন্য প্রযোজ্য।",
  },
];

export default Faqs;
