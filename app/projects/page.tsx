"use client";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { cn } from "@/utils/cn";
import React from "react";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Highlight } from "@/components/ui/hero-highlight";
import { PinContainer } from "@/components/ui/3d-pin";
import Link from "next/link";
import { TracingBeam } from "@/components/ui/tracing-beam";
const Hello = () => {
  return (
    <section className="lg:m-32 mt-32 " id="back-end">
      <TracingBeam>
        <div className="h-full relative w-full bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md">
          <Highlight className="text-black p-2 my-2 lg:p-7 lg:m-10 font-sans lg:text-2xl dark:text-white">
            Selection of My Favourite Projects
          </Highlight>
          <div className="grid lg:grid-cols-2">
            <div className="h-[40rem] w-[320px] lg:w-full flex items-center justify-center">
              <Link href="https://mjkm.vercel.app">
                <PinContainer
                  title="URL Shortener"
                  href="https://twitter.com/mannupaaji"
                >
                  <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[200px] lg:w-[20rem] h-[20rem] ">
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold  lg:text-base text-slate-100">
                      URL Shortener
                    </h3>
                    <div className=" text-xs lg:text-base !m-0 !p-0 font-normal">
                      <span className="text-slate-500 ">
                        Highly Scalable URL Shortener with Nextjs, Redis, Kafka.
                      </span>
                    </div>
                    <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                  </div>
                </PinContainer>
              </Link>
            </div>
            <div className="h-[40rem] w-[320px] lg:w-full flex items-center justify-center">
              <Link href="https://habit-tracker-jami.vercel.app">
                <PinContainer
                  title="Habit Tracker"
                  href="https://habit-tracker-jami.vercel.app"
                >
                  <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[200px] lg:w-[20rem] h-[20rem] ">
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                      Habit Tracker
                    </h3>
                    <div className=" text-xs lg:text-base !m-0 !p-0 font-normal">
                      {" "}
                      <span className="text-slate-500 ">
                        Monitor your activities, streaks, and progress with
                        little effort. Integrate statistics to your life!
                      </span>
                    </div>
                    <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                  </div>
                </PinContainer>
              </Link>
            </div>{" "}
            <div className="h-[40rem] w-[320px] lg:w-full flex items-center justify-center">
              <Link href="https://jami-nextjs-auth-temp.vercel.app/">
                <PinContainer
                  title="Next.js Auth Template"
                  href="https://jami-nextjs-auth-temp.vercel.app/"
                >
                  <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[200px] lg:w-[20rem] h-[20rem] ">
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                      Next.js Authentication Starter Template
                    </h3>
                    <div className=" text-xs lg:text-base !m-0 !p-0 font-normal">
                      {" "}
                      <span className="text-slate-500 ">
                        Built a Next.js Authentication Template with NextAuth.js
                        with integrated Email verification, Forgot Password and
                        Google, Gitub Integration which can be used by SaaS
                        applicationss
                      </span>
                    </div>
                    <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                  </div>
                </PinContainer>
              </Link>
            </div>{" "}
            <div className="h-[40rem] w-[320px] lg:w-full flex items-center justify-center">
              <Link href="https://portfolio-mohdjamis-projects.vercel.app/">
                <PinContainer
                  title="My Portfolio Website"
                  href="https://portfolio-mohdjamis-projects.vercel.app/"
                >
                  <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[200px] lg:w-[20rem] h-[20rem] ">
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                      My Portfolio Website
                    </h3>
                    <div className=" text-xs lg:text-base !m-0 !p-0 font-normal">
                      {" "}
                      <span className="text-slate-500 ">
                        This Project is currently in the biulding phase. It will
                        showcase my projects as well as provide information
                        about me.
                      </span>
                    </div>
                    <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                  </div>
                </PinContainer>
              </Link>
            </div>
          </div>
        </div>
      </TracingBeam>
    </section>
  );
};

export default Hello;
