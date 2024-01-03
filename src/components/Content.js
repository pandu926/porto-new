import Image from "next/image";
import React from "react";

export default function Content() {
  return (
    <div className="p-4 md:p-8 relative z-10 mt-60">
      <div className="text-center text-2xl md:text-3xl font-bold text-teal-500">
        About me
      </div>
      <div className="flex flex-col md:flex-row mx-auto max-w-6xl pt-10 space-y-8 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/2 bg-black text-white px-4 py-4">
          <h1 className="font-semibold text-2xl capitalize text-white pb-7 md:pb-12 m">
            about
          </h1>
          <h1 className="font-semibold text-2xl capitalize pb-8">
            My name is Ahmad Pandu Subekti, and I am a full-stack developer.
          </h1>
          <p className="pb-5">
            I have been working in web development for 2 years, constantly
            updating my skills and learning new technologies to improve my
            practices as a developer.
          </p>
          <table className="w-full">
            <thead>
              <tr>
                <td>age </td>
                <td>: 24 years</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>from </td>
                <td>: Wonosobo, Indonesia</td>
              </tr>
              <tr>
                <td>school </td>
                <td>: University Sains Al-qur'an</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-full md:w-1/3 bg-black text-white capitalize text-center pt-10 md:pt-0">
          <h1 className="text-2xl font-semibold pb-10 md:pb-0">My Skills</h1>
          <div className="text-center md:text-left  mt-4">
            <div>
              <h1 className="text-xl font-semibold pb-7 pt-12">Front-End</h1>
              <div className="flex flex-wrap">
                {Array.from({ length: 4 }, (_, index) => (
                  <div key={index} className="px-2 pt-2 pb-2 w-1/4 md:w-1/3">
                    <img
                      src={`./images/fronted/${index + 1}.svg`}
                      loading="lazy"
                      className="w-16 h-16 md:h-20 md:w-20"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <h1 className="text-xl font-semibold pb-7 pt-12">Back-End</h1>
              <div className="flex flex-wrap">
                {Array.from({ length: 4 }, (_, index) => (
                  <div key={index} className="px-2 pt-2 pb-2 w-1/4 md:w-1/3">
                    <img
                      src={`./1.svg`}
                      loading="lazy"
                      className="w-16 h-16 md:h-20 md:w-20"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <h1 className="text-xl font-semibold pb-7 pt-12">Tools</h1>
              <div className="flex flex-wrap ">
                {Array.from({ length: 5 }, (_, index) => (
                  <div key={index} className="px-2 pt-2 pb-2 w-1/4 md:w-1/3">
                    <img
                      src={`./1.svg`}
                      loading="lazy"
                      className="w-16 h-16 md:h-20 md:w-20"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
