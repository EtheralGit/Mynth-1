import React from "react";
import ROADMAP from "../data/roadmap";

const Roadmap = () => {
  return (
    <div className="pb-24">
      <h1 className="text-center text-4xl font-medium relative w-fit mx-auto text-[#4bd03f]">
        Roadmap
      </h1>
      <div className="timeline:mx-[23em] my-auto pt-20 flex justify-center items-center flex-col">
        {ROADMAP.map((item, index) => (
          <div
            key={index}
            className={`max-w-[34em] w-[100%] py-[2em] px-0 relative timeline:border-[#4bd03f] border-transparent road ${
              index % 2
                ? "border-r-[3px]  timeline:pr-[3em] timeline:translate-x-[-16.8em] before:right-0"
                : "border-l-[3px]  timeline:pl-[3em] timeline:translate-x-[17em] before:left-0"
            }`}
          >
            <span
              className={`labelCard font-semibold z-[30] ${
                index % 2 ? "-right-[1rem]" : "-left-[.7rem]"
              } `}
            >
              {index < 4 && "Q1"}
              {index > 3 && index < 7 && "Q2"}
              {index > 6 && index < 9 && "Q3"}
              {index > 8 && "Q4"}
            </span>
            <div
              className={`border-2 border-[#4bd03f] rounded-xl p-[1.5em] card ${
                index % 2
                  ? "timeline:before:right-[-0.9em]"
                  : "timeline:before:left-[-0.9em]"
              }`}
            >
              <h2 className="text-[#4bd03f] font-bold text-lg">{item.title}</h2>
              <p className="leading-[27px] text-white">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
