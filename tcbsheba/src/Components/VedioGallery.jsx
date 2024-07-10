import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const videos = [
  {
    id: 1,
    url: "https://www.youtube.com/embed/mo7gbrx55_w",
  },
  {
    id: 2,
    url: "https://www.youtube.com/embed/DmAh-_1u-Ow",
  },
  {
    id: 3,
    url: "https://www.youtube.com/embed/GU5ZZVFuxsQ",
  },
  {
    id: 4,
    url: "https://www.youtube.com/embed/7XfUV1KTHGE",
  },
  {
    id: 5,
    url: "https://www.youtube.com/embed/KMzEV6mwmDM",
  },
  {
    id: 6,
    url: "https://www.youtube.com/embed/uPfsRrAkKcs",
  },
  // Add more video objects as needed
];

function VideoGallery() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-vedio-image py-16">
      <div className="container mx-auto text-center">
        <h2
          className="text-[28px] sm:text-[34px] md:text-[37px] mt-14 font-bold mb-6 text-gray-800"
          data-aos="fade-down"
        >
          ভিডিও-গ্যালারী
        </h2>
        <p
          className="text-md sm:text-lg text-gray-700 mb-10"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          আমাদের সকল কার্যক্রম সম্পর্কিত ভিডিও সমূহ দেখুন
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0">
          {videos.map((video) => (
            <div
              key={video.id}
              className="rounded-lg overflow-hidden shadow-lg"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <iframe
                width="100%"
                height="315"
                src={video.url}
                title={`Video ${video.id}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VideoGallery;
