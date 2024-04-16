import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { motion } from "framer-motion";
import { SparklesCore } from "./ui/sparkles";

export function BackendProjects() {
  return (
    <section className="lg:m-32 m-10 " id="back-end">
      <div className="h-full relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <Highlight className="text-black p-2 my-2 lg:p-7 lg:m-10 font-sans lg:text-2xl dark:text-white">
          BACKEND PROJECTS
        </Highlight>

        <BentoGrid className="max-w-4xl my-20 mx-auto">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              github={item.github}
              live={item.live}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "Scalable Real Time Chat App",
    description:
      "Built a highly scalable real time chat application using websockets, Nodejs and Nextjs with robust and scalable backend architecture which can handle thousands of users.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    github: "https://github.com/mohdjami/RealChat-Scalable-WebSockets",
    live: "",
  },
  {
    title: "File Sharing Web App",
    description:
      "Developed a file sharing web application using Node.js, Express, and Mongoose. ",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    github: "https://github.com/mohdjami/file-sharing",
    live: "",
  },
  {
    title: "Connect with me NPM Package",
    description:
      "This is my first npm package to view my resume and connect to me",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    github: "https://github.com/mohdjami/first-npm-package",
    live: "",
  },
  {
    title: "Chat Room",
    description:
      "Asynchronous Web Socket Chat application Built using Django Framework.",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    github: "https://github.com/mohdjami/Chat-Room",
    live: "",
  },
  {
    title: "Notes Management and sharing",
    description:
      "It is a notes creating, sharing, searching app with unit tests, rate limiting and authentication.",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    github: "https://github.com/mohdjami/notes-app",
    live: "",
  },
  {
    title: "Todo CI/CD",
    description: "Jenkins CI/CD Integration for a Simple Todo App",
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    github: "https://github.com/mohdjami/Todo-CI-CD",
  },
  {
    title: "Library Management",
    description: "Built a library management API leveraging FastAPI framework.",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    github: "https://github.com/mohdjami/FastAPI-Library-Management",
  },
  {
    title: "Nodejs-Prisma Auth Template",
    description:
      "Nodejs and prisma Authentication and authorization template using Mongodb and JWT.",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    github: "https://github.com/mohdjami/Nodejs-Prisma",
  },
];
