"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "JavaScript",
    designation: "",
    image:'/E.png'
  },
  {
    id: 2,
    name: "TypeScript",
    designation: "",
    image:'/G.png'
  },
  {
    id: 3,
    name: "ReactJS",
    designation: "",
    image:'/C.png'
      
  },
  {
    id: 4,
    name: "NextJS",
    designation: "",
    image:'/D.png'
     
  },
  {
    id: 5,
    name: "TailwindCSS",
    designation: "",
    image:'/I.png'
     
  },
  {
    id: 6,
    name: "UI/UX",
    designation: "",
    image:'/H.png'
      
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
