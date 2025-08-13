"use client";
import { animate, motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    desciption:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia perspiciatis quo vel, aliquam suscipit",
    stack: [
      { name: "Html 5" },
      {
        name: "Css 3",
      },
      {
        name: "Javascript",
      },
    ],
    image: "/new.jpg",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "fullstack",
    title: "project 2",
    desciption:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia perspiciatis quo vel, aliquam suscipit",
    stack: [
      { name: "Next.js" },
      {
        name: "Tailwind.css",
      },
      {
        name: "Node.js",
      },
    ],
    image: "/next.svg",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "fullstack",
    title: "project 3",
    desciption:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia perspiciatis quo vel, aliquam suscipit",
    stack: [
      { name: "Next.js" },
      {
        name: "Tailwind.css",
      },
    ],
    image: "/hasib.JPG",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSliderChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px] ">
          <div className="w-full xl:w-[50%] xl:h-[460px]  flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-emerald-600 transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* projects description */}
              <p className="text-white/60">{project.desciption}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-emerald-600">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border  border-white/20"></div>
              {/* button */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-emerald-400" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-emerald-400" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidersPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSliderChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        ></Image>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* button slider */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%-22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
