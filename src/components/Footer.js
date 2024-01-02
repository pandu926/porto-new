import React from "react";

export default function Footer() {
  return (
    <div className="bg-gray-900 text-white mt-8 sm:mt-12 lg:mt-20">
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-20 flex flex-col sm:flex-row pt-8 sm:pt-10">
        <div className="w-full sm:w-1/2">
          <p className="text-2xl sm:text-3xl font-bold uppercase mb-4 sm:mb-0">
            Ahmad Pandu Subekti
          </p>
        </div>
        <div className="w-full sm:w-1/2 flex justify-end">
          <p className="text-sm sm:text-base pt-4 sm:pt-0">
            Page Created By pandusubekti © 2024. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
