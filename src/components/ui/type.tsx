"use client";
import Link from "next/link";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Full",
      className: "text-white",
    },
    {
      text: "Stack",
      className: "text-white",
    },
    {
      text: "Developer",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[20rem] mt-96 md:mt-80 sm:mt-96">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        Remain in the lead with us
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <Link
          href={"https://www.linkedin.com/in/muhammad-wasif-48282b274/"}
          target="_blank"
          className="inline-flex text-black bg-sky-500 border-0 py-2 px-6 focus:outline-none hover:bg-sky-700 rounded text-lg font-bold"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
