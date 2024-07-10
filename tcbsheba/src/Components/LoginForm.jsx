import React from "react";

const RightSection = () => {
  return (
    <div className="col-span-12 lg:col-start-8 lg:col-end-13 p-4 bg-transparent">
      <div className="bg-white p-6 md:p-10 lg:p-12 rounded-lg shadow-xl">
        <h2 className="text-xl md:text-2xl font-bold mb-6 text-center">
          হাতের মুঠোয় টিসিবি পণ্য
        </h2>
        <LoginForm />
      </div>
    </div>
  );
};

const LoginForm = () => {
  return (
    <form>
      <div className="mb-4">
        <label className="block text-gray-700 mb-1">
          মোবাইল নম্বর / ইউজার আইডি দিন
        </label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-[#0c3a30]"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-1">পাসওয়ার্ড দিন</label>
        <input
          type="password"
          className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-[#0c3a30]"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Security Question</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-[#0c3a30]"
        />
      </div>
      <div className="mb-4 flex items-center">
        <input
          type="checkbox"
          className="mr-2 focus:ring-2 focus:ring-[#0c3a30]"
        />
        <label className="text-gray-700">মনে রাখুন</label>
      </div>
      <button className="w-full bg-[#0c3a30] text-white p-2 rounded hover:bg-[#085c4d] transition duration-200">
        লগইন
      </button>
    </form>
  );
};

export default RightSection;
