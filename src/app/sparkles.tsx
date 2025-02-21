"use client";

import React from "react";
import { SparklesCore } from "../../components/ui/sparkles";


export function SparklesPreview() {
  return (
    <div className="fixed inset-0 h-screen w-screen bg-black">
      <div className="absolute inset-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      
    </div>
  );
}
