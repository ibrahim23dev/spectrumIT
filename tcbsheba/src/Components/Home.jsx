import Gallery from "./Gallery";
import LeftSection from "./LoginForm";
import Newsletter from "./Newsletter";
import VideoGallery from "./VedioGallery";
import Service from "./Service";
import Faqs from "./Faqs";
import PlayStoreIcon from "../assets/icons/playStore.png";
import AppStoreIcon from "../assets/icons/app-store.png";

function App() {
  return (
    <div>
      <div className="pb-[100px] pt-[200px] bg-cover bg-center bg-home-image">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[50px] items-center">
            <div className="col-span-12 lg:col-span-6 pl-10">
              <h1 className="text-2xl lg:text-3xl font-bold mb-4">
                ট্রেডিং কর্পোরেশন অব বাংলাদেশ (টিসিবি)
              </h1>
              <p className="font-semibold mb-4">
                গণপ্রজাতন্ত্রী বাংলাদেশ সরকার
              </p>
              <div className="max-w-[70%] mx-auto mb-8 gap-4">
                <img
                  src="https://img.freepik.com/premium-vector/young-man-looks-into-smartphone-vector-flat-style-illustration_357257-1174.jpg?w=826"
                  alt="Illustration"
                  className="rounded-full bg-transparent w-full h-auto"
                />
              </div>
              <div className="flex flex-col items-center md:flex-row gap-5">
                <a
                  href="https://play.google.com/store"
                  className="inline-flex items-center bg-[#0c3a30] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
                >
                  <img
                    src={PlayStoreIcon}
                    alt="Play Store"
                    className="w-6 h-6 mr-2"
                  />
                  Download মোবাইল অ্যাপ
                </a>
                <a
                  href="https://play.google.com/store"
                  className="inline-flex items-center bg-[#0c3a30] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
                >
                  <img
                    src={AppStoreIcon}
                    alt="App Store"
                    className="w-6 h-6 mr-2"
                  />
                  Download মোবাইল অ্যাপ
                </a>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <LeftSection />
            </div>
          </div>
        </div>
      </div>

      <Service />
      <Faqs />

      <section>
        <div className="min-h-screen bg-gray-100 ">
          <Gallery />
        </div>
      </section>
      <section className="min-h-screen">
        <VideoGallery />
      </section>
      <section className="pt-10 pb-10">
        <Newsletter />
      </section>
    </div>
  );
}

export default App;
