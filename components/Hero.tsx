"use client";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { SparklesCore } from "./ui/sparkles";
import { ArrowBigLeft, ArrowBigRight, Github, Linkedin } from "lucide-react";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { Blogs } from "./blogs-card";
import { ProjectCards } from "./project-card";
import { TextGenerateEffect } from "./text-generate-effect";
import Link from "next/link";
import { LiaGithub, LiaLinkedin } from "react-icons/lia";
import { TracingBeam } from "./ui/tracing-beam";

export function Hero() {
  const blogs = [
    {
      title: "First Interview Experience ",
      description: "This blog is about my first interview experience.",
      link: "/blog",
    },
    {
      title: "How to build a Scalable Application",
      description:
        "In this blog, I will show you how to build a scalable application with Next.js and Node.js.",
      date: "2021-10-10",
    },
    {
      title: "Building a Scalable Real Time Chat App",
      description:
        "In this blog, I will show you how to build a scalable real-time chat app with Next.js and Node.js.",
    },
  ];
  const projectsSentence = `To explore all my stunning Projects`;
  const words = [
    {
      text: "I",
    },
    {
      text: "am",
    },

    {
      text: "Jami,",
      className: "text-blue-500 dark:text-red-500",
    },
    {
      text: "a",
    },
    {
      text: "Passionate",
    },
    {
      text: "Software",
    },

    {
      text: "Developer",
    },
    {
      text: "having",
    },
    {
      text: "an",
    },
    {
      text: "experience",
    },
    {
      text: "of",
    },
    {
      text: "building",
    },
    {
      text: "Robust",
    },
    {
      text: " and ",
    },
    {
      text: " Scalable",
    },
    {
      text: "Applications",
      className: "text-blue-500 dark:text-blue-500",
    },
    // {
    //   text: "Aceternity.",
    //   className: "text-blue-500 dark:text-blue-500",
    // },
  ];
  return (
    <main>
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center lg:px-4 lg:mx-32"
        >
          <TracingBeam>
            <section className="grid lg:grid-cols-2 mx-16 lg:mt-20 lg:gap-5">
              <div className="h-[40rem] ml-6 w-full bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md">
                <div className="font-bold font-sans text- md:text-4xl lg:text-4xl dark:text-neutral-200 py-4">
                  <TypewriterEffect
                    words={words}
                    className="text-left text-2xl"
                  />
                </div>
                <div className="hidden lg:block">
                  <div className="flex items-left justify-center space-x-6">
                    <button className="flex bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-3 py-3">
                      Know More About Me <ArrowBigRight />
                    </button>
                    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                        Read my Blogs
                      </span>
                    </button>
                  </div>
                </div>
                <div className="flex  lg:hidden justify-between space-x-2">
                  <button className="flex bg-black dark:bg-white rounded-full w-fit text-white h-10 text-sm  dark:text-black px-2 py-2">
                    About
                    <ArrowBigRight className="h-5" />
                  </button>
                  &nbsp;
                  <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                      Read my Blogs
                    </span>
                  </button>
                </div>
              </div>
              <div className="grid lg:h-[40rem] w-full mb-10 bg-transparent  gap-10 lg:flex flex-col items-center justify-center overflow-hidden rounded-md ">
                <h1 className="md:text-4xl space-y-10 text-3xl space-x-10 lg:text-6xl font-bold text-center text-white relative lg:z-20">
                  Mohd Jami
                  <div className="flex space-x-4  mx-32 w-full md:text-4xl text-3xl lg:text-6xl font-bold text-center text-white relative lg:z-20">
                    <Link
                      href="https://github.com/mohdjami"
                      className="md:text-4xl text-3xl lg:text-6xl font-bold text-center text-white relative lg:z-20"
                    >
                      {" "}
                      <LiaGithub className="text-bold text-white" />
                    </Link>
                    <Link
                      href="https://linkedin.com/in/mohdjami"
                      className="md:text-4xl text-3xl lg:text-6xl font-bold text-center text-white relative lg:z-20"
                    >
                      <LiaLinkedin className="text-bold text-white" />
                    </Link>
                  </div>
                </h1>
              </div>
            </section>
            <section>
              <HeroHighlight>
                <motion.h1
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: [20, -5, 0],
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.4, 0.0, 0.2, 1],
                  }}
                  className="text-2xl bg-transparent md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-7xl leading-relaxed lg:leading-snug text-left mx-auto "
                >
                  <Highlight className="text-black dark:text-white">
                    I love to share my process of building applications and
                    knowledge through my Blogs.
                  </Highlight>
                </motion.h1>
              </HeroHighlight>
              <Blogs data={blogs} />
            </section>
            <section>
              <HeroHighlight>
                <motion.h1
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: [20, -5, 0],
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.4, 0.0, 0.2, 1],
                  }}
                  className="text-2xl text-left  bg-transparent md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-7xl leading-relaxed lg:leading-snug mx-auto "
                >
                  <Highlight className="text-black text-left dark:text-white">
                    Some of my Open Source Project to get started with!
                  </Highlight>
                </motion.h1>
              </HeroHighlight>
              <ProjectCards />
              <div className="flex m-10 space-x-10">
                <Link
                  href="/projects"
                  className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                >
                  Explore all projects
                </Link>
              </div>
            </section>
          </TracingBeam>
        </motion.div>
      </AuroraBackground>
    </main>
  );
}
