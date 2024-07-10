import React, { useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import search from "../assets/icons/search.svg";
import Group from "../assets/icons/group.svg";
import Data from "../assets/icons/data-processing.svg";
import Card from "../assets/icons/credit-card.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const Service = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // You can adjust the duration as needed
    });
  }, []);

  return (
    <section className="bg-[#fafffb] py-[80px]">
      <div className="container mx-auto">
        <div className="mb-[60px] w-full lg:w-7/12">
          <h3
            className="text-[24px] md:text-[30px] lg:text-[37px] font-semibold mb-[10px] pl-4 md:pl-8 lg:pl-12"
            data-aos="fade-up"
          >
            সেবা
          </h3>
          <p className="pl-4 md:pl-8 lg:pl-12" data-aos="fade-up" data-aos-delay="100">
            টিসিবি স্মার্ট ফ্যামিলি কার্ড ডেলিভারীর জন্য প্রস্তুত হলে ফ্যামিলি
            কার্ডের জন্য নিবন্ধন করা্র সময় প্রদত্ত মোবাইল নম্বরের মাধ্যমে কার্ড
            বিতরণের স্থান, তারিখ ও কোড জানিয়ে দেয়া হবে।
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] md:gap-[30px]">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.href}
              className="max-w-sm mx-auto p-[20px] md:p-[30px] lg:p-[40px] bg-white border border-[#0c3a302c] rounded-[20px] transition ease-in-out hover:bg-[#cfff45] hover:border-[#cfff45]"
              data-aos="fade-up"
              data-aos-delay={`${100 * (index + 1)}`}
            >
              <div className="flex items-center justify-center w-[70px] h-[70px] md:w-[80px] md:h-[80px] mb-[20px] md:mb-[30px] bg-[#0c3a30] rounded-full">
                <img src={service.icon} alt="" className="w-[40px] md:w-[50px] filter invert" />
              </div>
              <h4 className="mb-[10px] md:mb-[20px] text-[20px] md:text-[26px] lg:text-[34px] font-semibold tracking-tight text-gray-900">
                {service.title}
              </h4>
              <p className="mb-[20px] md:mb-[30px] lg:mb-[50px]">
                {service.description}
              </p>
              <button className="flex items-center gap-[10px]">
                বিস্তারিত দেখুন <BsArrowRight className="text-[20px]" />
              </button>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const services = [
  {
    href: "/",
    icon: search,
    title: "তথ্য খুঁজুন",
    description:
      "টিসিবির স্মার্ট ফ্যামিলি কার্ড এর জন্য আপনার এলাকার স্থানীয় প্রতিনিধি অর্থাৎ",
  },
  {
    href: "/",
    icon: Data,
    title: "তথ্য আপডেট করুন",
    description:
      "টিসিবির স্মার্ট ফ্যামিলি কার্ড এর জন্য আপনার এলাকার স্থানীয় প্রতিনিধি অর্থাৎ",
  },
  {
    href: "/",
    icon: Card,
    title: "ডুপ্লিকেট স্মার্টকার্ড",
    description:
      "টিসিবির স্মার্ট ফ্যামিলি কার্ড এর জন্য আপনার এলাকার স্থানীয় প্রতিনিধি অর্থাৎ",
  },
  {
    href: "/",
    icon: Group,
    title: "নতুন নিবন্ধন করুন",
    description:
      "টিসিবির স্মার্ট ফ্যামিলি কার্ড এর জন্য আপনার এলাকার স্থানীয় প্রতিনিধি অর্থাৎ",
  },
];

export default Service;
