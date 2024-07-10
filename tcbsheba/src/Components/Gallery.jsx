import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Card1 from '../assets/image-3.png';
import Card2 from '../assets/image-2.png'; 
import Card3 from '../assets/card-1.png'; 
import Card4 from '../assets/image-4.png';  
import PhotoCard from './photoCard';

const photos = [
  { src: Card1, alt: 'Description of image 1' },
  { src: Card2, alt: 'Description of image 2' },
  { src: Card3, alt: 'Description of image 3' },
  { src: Card4, alt: 'Description of image 4' },
];

const Gallery = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container mx-auto py-2 px-4">
      <h2 className="text-2xl md:text-3xl lg:text-[37px] mt-20 font-bold text-center mb-4">
        ফটোগ্যালারি
      </h2>
      <p className="text-center mb-8">আমাদের সকল কার্যক্রম সম্পর্কিত ছবি সমূহ দেখুন</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {photos.map((photo, index) => (
          <PhotoCard key={index} src={photo.src} alt={photo.alt} animationDelay={index * 100} />
        ))}
      </div>
      <div className="text-center mt-8">
        <a href="#" className="text-blue-500 underline">সবগুলো ছবি দেখুন →</a>
      </div>
    </div>
  );
};

export default Gallery;
