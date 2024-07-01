import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import HERO from "../data/hero";
const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[100vh] animate-fadeUp">
      <Image src="/logo.png" width={160} height={160} alt="logo" />
      <h1 className="text-center xl:text-[5.2rem] md:text-5xl text-4xl bg-gradient-to-r from-gray-500 to-white bg-clip-text text-transparent font-medium mt-12 pb-3 mb-2">
        {HERO.title}
      </h1>
      <h4 className="text-white/40 md:text-2xl text-Ll mb-12">
        {HERO.subtitle}
      </h4>
      <a
        href={HERO.firstLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-72 flex justify-center items-center border border-white h-20 rounded-full text-xl text-white/90 font-medium hover:scale-105 active:scale-100 duration-150"
      >
        <span className="mr-3">{HERO.firstButton}</span>

        <FaArrowRight claxssName="text-white" />
      </a>
      <a
        href={HERO.secondLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-72 flex justify-center items-center border border-[#4bd03f] h-20 rounded-full text-xl text-white/90 font-medium hover:scale-105 active:scale-100 duration-150 mt-8"
      >
        <span className="mr-3">{HERO.secondButton}</span>

        <FaArrowRight className="text-[#4bd03f]" />
      </a>
    </div>
  );
};

export default Hero;
