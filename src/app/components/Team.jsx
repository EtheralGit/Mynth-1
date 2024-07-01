import React from "react";
import TEAM from "../data/team";
import { FaDiscord, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Team = () => {
  return (
    <div>
      <div className="text-center ">
        <h1 className="text-4xl font-semibold relative w-fit mx-auto text-[#4bd03f]">
          Our Team
        </h1>
        <h2 className="mt-3 text-white/90 font-medium text-3xl">
          Meet Our Team
        </h2>
      </div>
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2  mt-12 gap-8">
        {TEAM.map((item, index) => (
          <div
            key={index}
            className="border-2 border-[#4bd03f] flex flex-col items-center rounded-xl p-5"
          >
            <img
              src={item.avatar}
              alt="person"
              className="w-28 h-28 rounded-full"
            />
            <div className="text-center mt-2.5">
              <h1 className="text-2xl text-white/90 font-semibold">
                {item.name}
              </h1>
              <p className="text-white/70">{item.role}</p>
              <div className="flex justify-center items-center mt-4 gap-x-3">
                {item.discord && (
                  <a
                    href={item.discord}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-105 active:scale-100 duration-150"
                  >
                    <FaDiscord className="w-7 h-7 text-[#4bd03f]" />
                  </a>
                )}
                {item.twitter && (
                  <a
                    href={item.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-105 active:scale-100 duration-150"
                  >
                    <FaTwitter className="w-7 h-7 text-[#4bd03f]" />
                  </a>
                )}
                {item.linkedIn && (
                  <a
                    href={item.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-105 active:scale-100 duration-150"
                  >
                    <FaLinkedin className="w-7 h-7 text-[#4bd03f]" />
                  </a>
                )}
                {item.github && (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-105 active:scale-100 duration-150"
                  >
                    <FaGithub className="w-7 h-7 text-[#4bd03f]" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
