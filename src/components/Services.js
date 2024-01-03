import Image from "next/image";

export default function services() {
  return (
    <div className="mx-auto max-w-6xl pt-20 px-4 md:px-8 relative z-10">
      <h1 className="text-center pb-20 text-2xl md:text-3xl font-bold text-teal-400">
        Services
      </h1>
      <div className=" flex flex-wrap justify-center items-center capitalize ">
        <div className="relative group w-full md:w-1/2 lg:w-2/5 p-4 transition-transform duration-300 transform hover:scale-105">
          <div className="hover:border-red-500 hover:border-2 hover:bg-white text-white hover:text-black border border-gray-300 p-4 rounded-md text-center bg-gray-900 relative">
            <div className="mx-auto ">
              <Image
                src={`./1.svg`}
                width={40}
                height={40}
                className="mx-auto"
              />
            </div>
            <h2 className="text-xl font-semibold mt-2">Card </h2>
            <p>
              Creation of well-structured web pages, good responsive design,
              attractive color palette, with interactions that give the user
              satisfaction when browsing the website.
            </p>
            <div className="absolute left-0 right-0 bottom-0 h-2 bg-teal-400 scale-x-0 origin-bottom transform transition-transform duration-300 group-hover:scale-x-100"></div>
          </div>
          {/* Progress Bar */}
        </div>
        <div className="relative group w-full md:w-1/2 lg:w-2/5 p-4 transition-transform duration-300 transform hover:scale-105">
          <div className="hover:border-red-500 hover:border-2 hover:bg-white text-white hover:text-black border border-gray-300 p-4 rounded-md text-center bg-gray-900 relative">
            <div className="mx-auto">
              <Image
                src={`./1.svg`}
                width={40}
                height={40}
                className="mx-auto"
              />
            </div>
            <h2 className="text-xl font-semibold mt-2">Card </h2>
            <p>
              Creation of well-structured web pages, good responsive design,
              attractive color palette, with interactions that give the user
              satisfaction when browsing the website.
            </p>
            <div className="absolute left-0 right-0 bottom-0 h-2 bg-teal-400 scale-x-0 origin-bottom transform transition-transform duration-300 group-hover:scale-x-100"></div>
          </div>
          {/* Progress Bar */}
        </div>
      </div>
    </div>
  );
}
