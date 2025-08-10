"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const about = 
  {
    title: "About me",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, quis quod enim quos necessitatibus modi architecto in labore hic inventore.",
    info: [
      {
        fieldName: "Name",
        filedValue: "Hasibul Islam",
      },
      {
        fieldName: "Phome",
        filedValue: "+88-01796315300",
      },
      {
        fieldName: "Experience",
        filedValue: "1+ years",
      },
      {
        fieldName: "Facebook",
        filedValue: "Hasib mahmud",
      },
      {
        fieldName: "Nationality",
        filedValue: "Bangladesh",
      },
      {
        fieldName: "Email",
        filedValue: "hasibmahmud6464@gmail.com",
      },
      {
        fieldName: "Language",
        filedValue: "English, Bangla",
      },
    ],
  },



const experience={
icon:'',
title:"My Experience",
description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, quis quod enim quos necessitatibus modi architecto in labore hic inventore.",
      items:[
        {
          company:"Zzazzo Limited",
          position:"Jr. Associate Software Engineer (web)",
          duration: 'March-08-2025 - Present'
        },
        {
          company:"King Soft Bd",
          position:"Web development ( Intern)",
          duration: '6 Month'
        },
      ]

}



const education={
icon:'',
title:"My Education",
description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, quis quod enim quos necessitatibus modi architecto in labore hic inventore.",
      items:[
        {
          institution:"Programming hero",
          Degree:"Web Development",
          duration: "2023"
        },
        {
          institution:"Codeacademy",
          Degree:"Front-end Track",
          duration: "2023"
        },
        {
          institution:"Daffodil Internation University",
          Degree:"B.sc in Computer Science and Enginerring",
          duration: "2018-2023"
        },
        {
          institution:"Jashore Shikkha Board Model School and College",
          Degree:"HSC",
          duration: "2014-1016"
        },
        {
          institution:"Arpara Ideal High School",
          Degree:"SSC",
          duration: "2014"
        },
       
      ]

}

const Resume = () => {
  return <div>this is resume</div>;
};

export default Resume;
