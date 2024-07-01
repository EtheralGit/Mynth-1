import React from "react";
import INTRODUCTION from "../data/introduction";

const Introduction = () => {
  return (
    <div className="w-full md:p-16 p-8 border-4 border-gray-100/20 rounded-xl flex xl:flex-row flex-col xl:space-x-16 space-y-12 justify-center items-center">
      <div className="rounded-xl w-full">
        <iframe
          src="https://www.youtube.com/embed/Pe0ObwhTWhs?si=euV2AKwVgGZw_uzU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          className="rounded-xl aspect-video w-[90%] mx-auto"
        ></iframe>
      </div>
      <div className="flex flex-col space-y-12 xl:w-[100%]">
        <h1 className="text-[#4bd03f] font-medium xl:text-7xl text-5xl xl:text-start text-center">
          {INTRODUCTION.title}
        </h1>
        <p className="text-white/80 font-light xl:text-xl text-lg leading-8 xl:text-start text-center">
          {INTRODUCTION.description}
        </p>
      </div>
    </div>
  );
};

export default Introduction;
