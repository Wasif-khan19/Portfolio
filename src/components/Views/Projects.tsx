import Link from "next/link";
import React from "react";
import { AnimatedTooltipPreview } from "../ui/anma";
import { SparklesPreview } from "../ui/stars";

const Projects = () => {
  return (
    <section className="text-gray-600 body-font mt-60">
      <div className="container px-5 mx-auto">
      <h1 className=" mt-96 md:mt-96 lg:mt-0 md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">PROJECTS</h1>
        <div className="flex flex-wrap">
          <div className="p-4 lg:w-1/3">
            <div className="h-full bg-black bg-opacity-75 px-8 pt-16 pb-24 rounded-xl overflow-hidden text-center relative">
            <h1 className="title-font sm:text-2xl text-xl font-bold text-white mb-3">
                Ecommerce Website
              </h1>
              <p className="leading-relaxed mb-3">
                I build this website using next.js which is fully responsive and you can access this website just clikc on the button below
              </p>
              <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                 <Link
              href={"https://sarastrading.vercel.app/"}
              target="_blank"
              className="inline-flex text-black bg-sky-500 border-0 py-2 px-6 focus:outline-none hover:bg-sky-700 rounded text-lg font-bold"
            >
              Project Link
            </Link>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/3">
            <div className="h-full bg-black bg-opacity-75 px-8 pt-16 pb-24 rounded-xl overflow-hidden text-center relative">
              <h1 className="title-font sm:text-2xl text-xl font-bold text-white mb-3">
                Portfolio Website
              </h1>
              <p className="leading-relaxed mb-3">
                This website is Build with Latest of the art technologies and it is fully responsive so, what are you waiting for click below and hire me
              </p>
              <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
              <Link
              href={"https://wasif-portfolio.vercel.app/"}
              target="_blank"
              className="inline-flex text-black bg-sky-500 border-0 py-2 px-6 focus:outline-none hover:bg-sky-700 rounded text-lg font-bold"
            >
              Project Link
            </Link>
              </div>
            </div>
          </div>

          <div className="p-4 lg:w-1/3">
            <div className="h-full bg-black bg-opacity-75 rounded-xl px-8 pt-16 pb-24 overflow-hidden text-center relative">
              <h1 className="title-font sm:text-2xl text-xl font-bold text-white mb-3">
                Clerk Authentication
              </h1>
              <p className="leading-relaxed mb-3">
                I made this complete clerk aythentication portal to directly use in in any website just like a components and it is easy to use
              </p>
              <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
              <Link
              href={"https://github.com/Wasif-khan19/clerk"}
              target="_blank"
              className="inline-flex text-black bg-sky-500 border-0 py-2 px-6 focus:outline-none hover:bg-sky-700 rounded text-lg font-bold"
            >
              Project Link
            </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
