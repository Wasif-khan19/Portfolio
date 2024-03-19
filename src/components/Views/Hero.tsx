import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="sm:text-6xl md:text-1xl text-3xl mb-4 font-bold text-gray-600">
            Hello,
          </h1>
          <h1 className="sm:text-6xl md:text-1xl text-3xl mb-8 font-bold text-sky-500">
            Muhammad Wasif
          </h1>
          <p className="mb-8 text-2xl leading-relaxed">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with{" "}
            <span className="text-white font-bold">
              TypeScript, React, Node.js, Next.js, PostgreSQL, HTML, CSS
            </span>
          </p>
          <div className="flex justify-center">
            <Link
              href={"https://github.com/Wasif-khan19"}
              target="_blank"
              className="inline-flex text-black bg-sky-500 border-0 py-2 px-6 focus:outline-none hover:bg-sky-700 rounded text-lg font-bold"
            >
              Resume
            </Link>
          </div>
        </div>
        <div className="">
          <Image
            src={"/F.jpg"}
            width={350}
            height={350}
            alt=""
            className="border-sky-500 border-8 rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
