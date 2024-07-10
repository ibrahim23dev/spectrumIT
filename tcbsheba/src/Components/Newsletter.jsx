import React, { useEffect } from 'react';
import NewsLetter from "../assets/news-img.d91c39ecc4bec73c26ee.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Newsletter = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // You can adjust the duration as needed
    });
  }, []);

  return (
    <div 
      className="container mx-auto p-6 bg-white border border-gray-400 rounded-lg shadow-md flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6"
      data-aos="fade-up"
    >
      <img 
        src={NewsLetter} 
        alt="Newsletter Illustration" 
        className="h-50 w-full md:w-1/3 object-cover rounded-lg" 
        data-aos="fade-right"
      />
      <div className="flex-1 text-center md:text-left" data-aos="fade-left">
        <h2 className="text-orange-500 text-sm">সংবাদ</h2>
        <h3 className="text-2xl font-bold mb-2">সংবাদ-পুস্তিকা সদস্যতা</h3>
        <p className="text-gray-600 mb-4">আমাদের কাছ থেকে বাজারের সর্বশেষ তথ্য মিস করবেন না। বোতামে ক্লিক করে, আপনি আমাদের শর্তাবলীর সাথে সম্মত হচ্ছেন।</p>
        <form className="flex flex-col md:flex-row">
          <input 
            type="email" 
            placeholder="ইমেইল প্রবেশ কর" 
            className="flex-1 p-3 border border-[#0c3a30] rounded-lg md:rounded-l-lg md:rounded-r-none focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 md:mb-0"
          />
          <button 
            type="submit" 
            className="bg-[#0c3a30] text-white p-3 rounded-lg md:rounded-r-lg md:rounded-l-none hover:bg-[#64dec3] focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <FaLongArrowAltRight />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
