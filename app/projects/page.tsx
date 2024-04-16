import { BackendProjects } from "@/components/backend-project";
import { FrontendProjects } from "@/components/front-end-projects";
import { FullstackProjects } from "@/components/full-stack-projects";
import { OtherProjects } from "@/components/other-projects";
import { BentoGridProjecs } from "@/components/Projects";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { SparklesCore } from "@/components/ui/sparkles";
import { motion } from "framer-motion";
import React from "react";

const Hello = () => {
  return (
    <div className="h-full relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-full">
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
      <FullstackProjects />

      <FrontendProjects />
      <OtherProjects />
    </div>
  );
};

export default Hello;
