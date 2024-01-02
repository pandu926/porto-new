"use client";
import React from "react";
import Particles from "@tsparticles/react";
import ParticleConfig from "./particle-config";

export default function ParticleBackground() {
  return (
    <Particles
      id="particles"
      className="particles-css"
      params={ParticleConfig}
    ></Particles>
  );
}
