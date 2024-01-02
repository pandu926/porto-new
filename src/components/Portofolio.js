"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const AutoplaySlider = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    dots: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 600, // adjust based on your design needs
        settings: {
          slidesToShow: 1,
          centerPadding: "20px", // adjust as needed
        },
      },
      {
        breakpoint: 1024, // adjust based on your design needs
        settings: {
          slidesToShow: 3,
          centerPadding: "60px", // adjust as needed
        },
      },
    ],
  };

  return (
    <div className="mx-8 md:mx-16 lg:mx-32 text-white mt-28">
      <h2 className="text-center text-xl md:text-3xl font-bold mb-8 pb-20 text-teal-600">
        Projects
      </h2>
      <Slider {...settings}>
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="w-full md:w-1/2 lg:w-2/5 mx-auto px-4 mb-8"
          >
            <div className="relative group transition-transform duration-300 transform hover:scale-105">
              <div className="hover:border-red-500 hover:border-2 hover:bg-white text-white hover:text-black border border-gray-300 p-4 rounded-md text-center bg-gray-900 relative">
                <div className="mx-auto mb-4">
                  <Image
                    src={`./1.svg`}
                    width={40}
                    height={40}
                    className="mx-auto"
                  />
                </div>
                <h2 className="text-xl font-semibold mt-2">Card</h2>
                <p className="text-sm text-gray-300">
                  Creation of well-structured web pages, good responsive design,
                  attractive color palette, with interactions that give the user
                  satisfaction when browsing the website.
                </p>
                <div className="absolute left-0 right-0 bottom-0 h-2 bg-teal-400 scale-x-0 origin-bottom transform transition-transform duration-300 group-hover:scale-x-100"></div>
              </div>
              {/* Progress Bar */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AutoplaySlider;
