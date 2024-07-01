"use client";
import { useEffect } from "react";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import Spotlight from "./components/Spotlight";
import IntroText from "./components/IntroText";
import Partners from "./components/Partners";
import Roadmap from "./components/Roadmap";
import Team from "./components/Team";
import Footer from "./components/Footer";

export default function Home() {
  useEffect(() => {
    const createParticle = () => {
      if (document.querySelectorAll(".particle").length > 50) {
        return;
      }

      const particle = document.createElement("div");
      particle.classList.add("particle");
      document.body.appendChild(particle);

      const size = Math.random() * 4 + 7;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.top = `${Math.random() * 100}vh`;

      particle.addEventListener("animationend", () => {
        particle.remove();
      });
    };

    const interval = setInterval(createParticle, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="wrapper flex justify-center">
      <div className="max-w-[85rem] w-full z-[100] px-8 py-4">
        <Hero />
        <Introduction />
        <Spotlight />
        <IntroText />
        <Partners />
        <Roadmap />
        <Team />
        <Footer />
      </div>
    </div>
  );
}
