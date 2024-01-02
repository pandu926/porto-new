import Image from "next/image";
import React from "react";

export default function Contact() {
  return (
    <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 text-white pt-10 sm:pt-16 md:pt-20 capitalize">
      <div className="text-center text-3xl font-bold text-teal-500">
        Contact Me
      </div>
      <div className="flex flex-col sm:flex-row justify-between mt-8 sm:mt-12 lg:mt-20">
        {Array.from({ length: 5 }, (_, index) => (
          <div
            key={index}
            className="mb-4 sm:mb-0 px-2 pt-2 pb-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
          >
            <Image src={`./1.svg`} width={60} height={60} />
            <p className=" mt-2">Instagram</p>
          </div>
        ))}
      </div>
    </div>
  );
}
