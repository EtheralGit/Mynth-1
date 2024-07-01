import React from "react";
import INTROTEXT from "../data/introtext";

const IntroText = () => {
  return (
    <div className="w-full p-8 border-4 border-gray-100/20 rounded-xl flex xl:flex-row-reverse flex-col space-y-12 justify-center items-center">
      <div className="rounded-xl xl:w-full md:w-[60%] w-full">
        <img src="/intro.png" className="w-full h-full" alt="intro" />
      </div>
      <div className="flex flex-col space-y-12 xl:w-[100%]">
        <h1 className="text-[#4bd03f] font-medium xl:text-7xl text-5xl xl:text-start text-center">
          {INTROTEXT.title}
        </h1>
        <p className="text-white/80 font-light text-lg leading-8 xl:text-start text-center whitespace-pre-wrap">
          {INTROTEXT.paragraph1}
        </p>
        <p className="text-white/80 font-light text-lg leading-8 xl:text-start text-center whitespace-pre-wrap">
          <span className="block">
            <span className="inline-block w-3 h-3 rounded-full mr-4 bg-[#4bd03f]" />
            {INTROTEXT.point1}
          </span>
          <span className="block">
            <span className="inline-block w-3 h-3 rounded-full mr-4 bg-[#4bd03f]" />
            {INTROTEXT.point2}
          </span>
          <span className="block">
            <span className="inline-block w-3 h-3 rounded-full mr-4 bg-[#4bd03f]" />
            {INTROTEXT.point3}
          </span>
          <span className="block">
            <span className="inline-block w-3 h-3 rounded-full mr-4 bg-[#4bd03f]" />
            {INTROTEXT.point4}
          </span>
        </p>
        <p className="text-white/80 font-light text-lg leading-8 xl:text-start text-center whitespace-pre-wrap">
          {INTROTEXT.paragrahp2}
        </p>
      </div>
    </div>
  );
};

export default IntroText;
