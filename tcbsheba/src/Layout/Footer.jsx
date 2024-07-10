// src/Footer.js
import React from 'react';
import TCBLOGO from '../assets/tcbLogo.png';
import ITLogo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-300">
      <div className="max-w-6xl mx-auto py-8 px-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src={TCBLOGO} alt="TCB Logo" className="h-12" />
          <div>
            <h3 className="text-sm font-semibold">পরিকল্পনা ও বাস্তবায়নে:</h3>
            <p className="text-sm">ট্রেডিং কর্পোরেশন অব বাংলাদেশ</p>
            <a href="http://www.tcb.gov.bd" className="text-sm text-blue-500">www.tcb.gov.bd</a>
          </div>
        </div>
        <div className="flex items-center space-x-4 mt-6 sm:mt-0">
          <img src={ITLogo} alt="Spectrum Logo" className="h-12" />
          <div>
            <h3 className="text-sm font-semibold">কারিগরি সহযোগিতায়:</h3>
            <p className="text-sm">আইআইইএফসি এন্ড স্পেকট্রাম আইটি সলিউশন লি:</p>
            <a href="http://www.spectrum.com.bd" className="text-sm text-blue-500">www.spectrum.com.bd</a>
          </div>
        </div>
      </div>
      <div className="text-center text-sm py-4 border-t border-gray-300">
        <p>কপিরাইট © ২০২৪ ট্রেডিং কর্পোরেশন অব বাংলাদেশ</p>
      </div>
    </footer>
  );
};

export default Footer;
