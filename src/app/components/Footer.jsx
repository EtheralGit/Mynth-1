import React from "react";
import { FaDiscord, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex justify-center item-center py-24 flex-col w-full">
      <div className="flex justify-center items-center gap-x-16">
        <a
          href="https://mynth.ai/discord"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-105 active:scale-100 duration-150"
        >
          <FaTwitter className="w-16 h-16 text-[#4bd03f]" />
        </a>
        <a
          href="https://mynth.ai/twitter"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-105 active:scale-100 duration-150"
        >
          <FaDiscord className="w-16 h-16 text-[#4bd03f]" />
        </a>
      </div>
      <h1 className="text-white/50 text-xl text-center pt-8">
        &copy;2024 - 2025 EtheralCode.
      </h1>
    </div>
  );
};

export default Footer;
