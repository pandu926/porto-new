"use client";
// components/AnimatedText.js
import { useEffect } from "react";
import anime from "animejs";
import Scrool from "./Scrool";

export default function AniName() {
  useEffect(() => {
    anime
      .timeline({ loop: true })
      .add({
        targets: ".ml15 .word",
        scale: [14, 1],
        opacity: [0, 1],
        easing: "easeOutCirc",
        duration: 800,
        delay: (el, i) => 800 * i,
      })
      .add({
        targets: ".ml15",
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 20000,
      });
  }, []);

  return (
    <div className="ml15">
      <div className="text-white capitalize text-center">
        <div className="text-xl md:text-3xl font-bold md:font-extrabold mt-24">
          <p className="mt-5 word">hi ,</p>
          <p className="word mt-5 text-teal-400 text-2xl md:text-4xl">
            i am ahmad pandu subekti
          </p>
          <p className="mt-5 word "> fullstack web developer</p>
        </div>
        <div className="pt-64 md:pt-40">
          <Scrool />
        </div>
      </div>
    </div>
  );
}
