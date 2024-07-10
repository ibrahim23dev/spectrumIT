import React from 'react';

const PhotoCard = ({ src, alt, animationDelay }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg" data-aos="fade-up" data-aos-delay={animationDelay}>
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
};

export default PhotoCard;
