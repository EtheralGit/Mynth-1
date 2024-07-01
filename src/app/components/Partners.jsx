import React from "react";
import PARTNERS from "../data/partners";

const Partners = () => {
  return (
    <div className="flex flex-col justify-center items-center py-24">
      <h1 className="text-center text-4xl font-medium relative w-fit mx-auto text-white">
        Our <span className="text-[#4bd03f]">Partners</span>
      </h1>
      <div className="flex justify-center items-center gap-x-2 gap-y-0 flex-wrap">
        {PARTNERS.map((item, index) => (
          <img src={item.img} alt="partner" key={index} />
        ))}
      </div>
    </div>
  );
};

export default Partners;
