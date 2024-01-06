"use client";
import Link from "next/link";
import AniName from "./animate/AniName";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  const bar = () => {
    setToggle(!toggle);
  };
  return (
    <div className="text-white relative z-10">
      <div className="bg-gray-900 text-white relative z-10">
        <div className="flex mx-4 md:mx-8 lg:mx-32 font-bold pt-4 pb-4  md:pt-7 md:pb-7">
          <div className="w-full  md:w-1/4  text-base md:text-xl">
            PANDUSUBEKTI
          </div>
          <div
            className={`${
              toggle ? "none" : "hidden"
            } mt-10 md:mt-0 -ml-5 md:-ml-0 pl-10 md:pl-0 md:pt-0 md:pb-0 pt-5 pb-5 bg-gray-900 w-full absolute md:relative md:flex md:w-3/6 justify-between capitalize font-bold`}
          >
            <Link href="/" passHref>
              <p className="nav-link">Home</p>
            </Link>
            <Link href="/about" passHref>
              <p className="nav-link">About Me</p>
            </Link>
            <Link href="/services" passHref>
              <p className="nav-link">Services</p>
            </Link>
            <Link href="/projects" passHref>
              <p className="nav-link">Projects</p>
            </Link>
            <Link href="/contact" passHref>
              <p className="nav-link">Contact Me</p>
            </Link>
          </div>
          <div onClick={bar} className="block md:hidden w-1/4">
            <Image src={"./images/bar.svg"} width={25} height={20} />
          </div>
        </div>
      </div>
      <AniName />
    </div>
  );
}
