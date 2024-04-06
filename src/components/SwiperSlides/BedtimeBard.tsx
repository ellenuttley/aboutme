'use client'

import React, { useState } from "react";
import { BsEmojiSunglasses } from "react-icons/bs";


const BedtimeBard = () => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const handleMouseEnter = (tooltipId: string) => {
    setActiveTooltip("bardLogo");
  };

  const handleMouseLeave = () => {
    setActiveTooltip(null);
  };

  return (
    <div className="slideBody font-solway ">
      <div className="slideHeader content-center  justify-evenly bg-[#BBAFD3]">
        <a
          href="https://github.com/ellenuttley/bedtime-bard"
          onMouseEnter={() => handleMouseEnter("bardLogo")}
          onMouseLeave={handleMouseLeave}
        >
          <img
            className="flex max-h-16 md:max-h-20 lg:max-h-24"
            src="/bardLogo.png"
            alt="Bedtime Bard Logo"
          />
          <span
            className={`swiper-tooltip -translate-x-32  ${activeTooltip === "bardLogo" ? "scale-100" : "scale-0"}`}
          >
            Click me to view the GitHub!
          </span>
        </a>

        <h1 className="slideTitle flex self-center font-bungee">
          BEDTIME BARD{" "}
        </h1>
      </div>
      <p className="slideBody font-solway dark:bg-transparent ">
        Bedtime Bard is a Flask built web app that uses the OpenAI API to take
        the stress out of bedtime. It writes tailor-made, age-appropriate
        bedtime stories, and then weaves in the child's bedtime routine steps.
        So, if they want to know what comes next, they better hurry up and brush
        their teeth!{" "}
      </p>

      <div className="slideBody shadow-bardBlack mb-6 space-y-1 rounded-xl bg-[#9DC3CC] p-6 font-solway shadow-sm">
        <p>
          This project was made as part of the Software Engineering{" "}
          <a
            href="https://codefirstgirls.com/courses/cfgdegree/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CFGDegree
          </a>
        </p>
        <p>
          Check out my presentation below for more information - it got 100%
          {"  "}
          <span className="inline-block text-tGrey/50">
            {"  "}
            <BsEmojiSunglasses />
          </span>
        </p>
      </div>

      <div
        className="shadow-bardBlack relative h-auto w-full rounded-xl shadow-sm "
        style={{
          paddingTop: "56.2500%",
          paddingBottom: "0",
          marginTop: "0.9em",
          marginBottom: "0.9em",
          overflow: "hidden",
          willChange: "transform",
        }}
      >
        <iframe
          loading="lazy"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: "0",
            left: "0",
            border: "none",
            padding: "0",
            margin: "0",
          }}
          src="https://www.canva.com/design/DAFjlSIcLYA/view?embed"
          allowFullScreen
          allow="fullscreen"
          title="Bedtime Bard Presentation"
        ></iframe>
      </div>
      {/* 
      <p className="slideBody font-solway shadow-bardBlack mb-6 rounded-xl bg-[#E7B1F6] p-6 shadow-sm">
        Click the image below to view the wireframes and user story
      </p>

      <a
        href="https://www.canva.com/design/DAFiqI0neAQ/RlNIIqjLNbFkPRyxAojOdQ/view?utm_content=DAFiqI0neAQ&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
        target="#"
        rel="noopener"
        className="shadow-bardBlack relative block h-auto w-full rounded-xl shadow-sm touch-pinch-zoom"
        style={{
          paddingTop: "56.2500%",
          paddingBottom: "0",
          marginTop: "0.9em",
          marginBottom: "0.9em",
          overflow: "hidden",
          willChange: "transform",
          position: "relative",
        }}
      >
        <iframe
          loading="lazy"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: "0",
            left: "0",
            border: "none",
            padding: "0",
            margin: "0",
          }}
          src="https://www.canva.com/design/DAFiqI0neAQ/RlNIIqjLNbFkPRyxAojOdQ/view?embed"
          allowFullScreen
          allow="fullscreen"
          title="BedtimeBard Wireframes"
        ></iframe>
      </a> */}
    </div>
  );
};

export default BedtimeBard;
