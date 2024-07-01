import React from "react";
import SPOTLIGHT from "../data/spotlight";

const Spotlight = () => {
  return (
    <div className="min-h-[65vh] py-24">
      <h1 className="text-center text-4xl font-medium relative w-fit mx-auto text-white">
        In The <span className="text-[#4bd03f]">Spotlight</span>
        <span className="w-1/2 h-1 rounded-full bg-[#4bd03f] absolute -bottom-4 right-0" />
        <span className="w-1/4 h-1 rounded-full bg-[#4bd03f] absolute -bottom-7 right-0" />
      </h1>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-x-8 lg:mt-24 mt-4 lg:p-0 sm:p-24 p-8 gap-y-8">
        <div className="rounded-t-2xl rounded-b-lg w-full bg-[#4bd03f]">
          <div className="h-2/3 overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/wvUukA48do8?si=yeMvuXppnH9o3U0k"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              className="rounded-t-xl aspect-video w-[100%] h-full mx-auto"
              allowfullscreen
            ></iframe>
          </div>
          <div className="text-center pb-4 px-2">
            <h1 className="text-white font-medium text-3xl mt-4">
              {SPOTLIGHT.title1}
            </h1>
            <p className="font-medium text-black text-xl mt-2">
              {SPOTLIGHT.subtitle1}
            </p>
          </div>
        </div>
        <div className="rounded-t-2xl rounded-b-lg w-full bg-[#4bd03f]">
          <div className="h-2/3 overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/DhP0ZLOO6no?si=qb9CYnLuoytdV9EK"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              className="rounded-t-xl aspect-video w-[100%] h-full mx-auto"
              allowfullscreen
            ></iframe>
          </div>
          <div className="text-center pb-4 px-2">
            <h1 className="text-white font-medium text-3xl mt-4">
              {SPOTLIGHT.title2}
            </h1>
            <p className="font-medium text-black text-xl mt-2">
              {SPOTLIGHT.subtitle2}
            </p>
          </div>
        </div>
        <div className="rounded-t-2xl rounded-b-lg w-full bg-[#4bd03f]">
          <div className="h-2/3 overflow-hidden">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/O0ELHI4VE-w?si=9ZHQoIGY2lzPbDVg"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              className="rounded-t-xl aspect-video w-[100%] mx-auto"
              allowfullscreen
            ></iframe>
          </div>
          <div className="text-center pb-4 px-2">
            <h1 className="text-white font-medium text-3xl mt-4">
              {SPOTLIGHT.title3}
            </h1>
            <p className="font-medium text-black text-xl mt-2">
              {SPOTLIGHT.subtitle3}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spotlight;
