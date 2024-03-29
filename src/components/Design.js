"use client";
import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "../css/header.css";

export default function ParticleHeaderBg() {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      className="particles-2-css"
      options={{
        background: {
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover",
          color: "#000",
        },
        fullScreen: {
          enable: false,
        },
        interactivity: {
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 10,
              divs: {
                distance: 200,
                duration: 0.4,
                mix: false,
                selectors: [],
              },
            },
            grab: {
              distance: 400,
            },
            repulse: {
              divs: {
                distance: 200,
                duration: 0.4,
                factor: 100,
                speed: 1,
                maxSpeed: 50,
                easing: "ease-out-quad",
                selectors: [],
              },
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: {
              value: "#000",
            },
            distance: 150,
            opacity: 0.4,
          },
          move: {
            attract: {
              rotate: {
                x: 600,
                y: 1200,
              },
            },
            enable: true,
            outModes: {
              bottom: "out",
              left: "out",
              right: "out",
              top: "out",
            },
          },
          number: {
            density: {
              enable: true,
            },
            value: 24,
          },
          opacity: {
            random: {
              enable: true,
            },
            value: {
              min: 0.1,
              max: 1,
            },
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.2,
            },
          },
          rotate: {
            random: {
              enable: true,
            },
            animation: {
              enable: true,
              speed: 5,
            },
            direction: "random",
          },
          shape: {
            options: {
              character: {
                fill: false,
                font: "Verdana",
                style: "",
                value: "*",
                weight: "400",
              },
              char: {
                fill: false,
                font: "Verdana",
                style: "",
                value: "*",
                weight: "400",
              },
              polygon: {
                sides: 5,
              },
              star: {
                sides: 5,
              },
              image: [
                {
                  src: "./images/fronted/1.svg",
                  width: 20,
                  height: 20,
                  lazy: true,
                },
                {
                  src: "./images/fronted/2.svg",
                  width: 20,
                  height: 20,
                  lazy: true,
                },
                {
                  src: "./images/fronted/3.svg",
                  width: 20,
                  height: 20,
                  lazy: true,
                },
                {
                  src: "./images/fronted/4.svg",
                  width: 20,
                  height: 20,
                  lazy: true,
                },
                {
                  src: "./images/fronted/5.svg",
                  width: 20,
                  height: 20,
                  lazy: true,
                },
                {
                  src: "./images/fronted/6.svg",
                  width: 20,
                  height: 20,
                  lazy: true,
                },
                {
                  src: "./images/fronted/7.svg",
                  width: 20,
                  height: 20,
                  lazy: true,
                },
                {
                  src: "./images/backend/1.svg",
                  width: 20,
                  height: 20,
                  lazy: true,
                },
                {
                  src: "./images/backend/2.svg",
                  width: 20,
                  height: 20,
                  lazy: true,
                },
                {
                  src: "./images/backend/3.svg",
                  width: 20,
                  height: 20,
                  lazy: true,
                },
                {
                  src: "./images/backend/4.svg",
                  width: 20,
                  height: 20,
                  lazy: true,
                },
              ],
              images: [
                {
                  src: "./images/fronted/1.svg",
                  width: 20,
                  height: 20,
                  lazy: true,
                },
                {
                  src: "./images/fronted/2.svg",
                  width: 20,
                  height: 20,
                  lazy: true,
                },
                {
                  src: "./images/fronted/3.svg",
                  width: 20,
                  height: 20,
                  lazy: true,
                },
                {
                  src: "./images/fronted/4.svg",
                  width: 20,
                  height: 20,
                  lazy: true,
                },
                {
                  src: "./images/fronted/5.svg",
                  width: 20,
                  height: 20,
                  lazy: true,
                },
                {
                  src: "./images/fronted/6.svg",
                  width: 20,
                  height: 20,
                  lazy: true,
                },
                {
                  src: "./images/fronted/7.svg",
                  width: 20,
                  height: 20,
                  lazy: true,
                },
                {
                  src: "./images/backend/1.svg",
                  width: 20,
                  height: 20,
                  lazy: true,
                },
                {
                  src: "./images/backend/2.svg",
                  width: 20,
                  height: 20,
                  lazy: true,
                },
                {
                  src: "./images/backend/3.svg",
                  width: 20,
                  height: 20,
                  lazy: true,
                },
                {
                  src: "./images/backend/4.svg",
                  width: 20,
                  height: 20,
                  lazy: true,
                },
              ],
            },
            type: "image",
          },
          size: {
            value: 50,
            animation: {
              speed: 40,
              minimumValue: 0.1,
            },
          },
          stroke: {
            width: "100px",
            color: {
              value: "#000000",
              animation: {
                h: {
                  count: 0,
                  enable: false,
                  offset: 0,
                  speed: 1,
                  decay: 0,
                  sync: true,
                },
                s: {
                  count: 0,
                  enable: false,
                  offset: 0,
                  speed: 1,
                  decay: 0,
                  sync: true,
                },
                l: {
                  count: 0,
                  enable: false,
                  offset: 0,
                  speed: 1,
                  decay: 0,
                  sync: true,
                },
              },
            },
          },
        },
      }}
    ></Particles>
  );
}
