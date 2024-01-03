import Design from "@/components/Design";
import React from "react";

export default function ParticleBackground() {
  return (
    <div>
      <div className="w-full z-0 h-screen absolute top-0 left-0">
        <Design />
      </div>
    </div>
  );
}
