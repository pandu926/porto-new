import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Contact() {
  const data = Array(
    {
      id: 1,
      link: "https://twitter.com/pandusubekti99",
    },
    {
      id: 2,
      link: "https://instagram.com/pandu.subekti2",
    },
    {
      id: 3,
      link: "https://instagram.com/a_pndu_",
    },
    {
      id: 4,
      link: "mailto:ahmadpandusubekti@gmail.com",
    },
    {
      id: 5,
      link: "https://linkedin.com/pandu",
    }
  );
  return (
    <div className="mx-4 md:mx-32 text-white pt-10 sm:pt-16 md:pt-20 capitalize relative z-10 ">
      <div className="text-center text-2xl md:text-3xl font-bold text-teal-500">
        Contact Me
      </div>
      <div className="flex justify-between mt-8 sm:mt-12 lg:mt-20 ml-3 md:ml-12 pb-7 md:pb-10">
        {data.map((ya, index) => (
          <Link
            href={ya.link}
            key={index}
            className="mb-4 sm:mb-0 px-2 pt-2 pb-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
          >
            <img
              src={`./images/contact/${index + 1}.svg`}
              className=" w-8 h-8"
              loading="lazy filter grayscale hover:greyscale-0 hover:filter-none"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
