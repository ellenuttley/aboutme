"use client";

import React, { useState } from "react";
import Image from "next/image";

const PetItDone = () => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const handleMouseEnter = (tooltipId: string) => {
    setActiveTooltip("petitdoneAx");
  };

  const handleMouseLeave = () => {
    setActiveTooltip(null);
  };

  return (
    <div className="slideBody flex  flex-col font-irene">
      <div className="slideHeader inline-flex h-fit items-center  bg-[#B0E3EE]">
        <a
          href="https://github.com/ellenuttley/pet-it-done"
          onMouseEnter={() => handleMouseEnter("petitdoneAx")}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            className="flex size-fit flex-shrink"
            src="/petitdoneAx.png"
            alt="Pet It Done Axolotl"
            width={100}
            height={80}
          />
          <span
            className={`swiper-tooltip -translate-x-32  ${activeTooltip === "petitdoneAx" ? "scale-100" : "scale-0"}`}
          >
            Click me to view the GitHub!
          </span>
        </a>
        <h1 className="slideTitle flex-grow self-center font-irene normal-case">
          PetItDone{" "}
        </h1>
      </div>

      {/* <div className="dark:bg-darkPrimary  dark:border-secondary dark:shadow-primary grid w-full grid-cols-3 justify-center rounded-xl bg-[#BBAFD3] p-3 shadow-sm shadow-tBlack md:p-6 dark:bg-opacity-70 dark:text-tWhite">

          <img
            className="col-span-1 h-auto w-auto flex-shrink justify-normal self-center"
            src="/bardLogo.png"
            alt="Bedtime Bard Logo"
          />
          <span
            className={`swiper-tooltip  ${activeTooltip === "bardLogo" ? "scale-100" : "scale-0"}`}
          >
            Click me to view the GitHub!
          </span>
        </a>

        <h1 className="slideTitle col-span-2 self-center font-bungee">
          BEDTIME BARD{" "}
        </h1>
      </div> */}

      <p className="slideBody font-irene dark:bg-transparent">
        PetItDone is a React Native app that combines a digipet and to-do list.
        Designed by neurodivergent people, with neurodivergent people in mind,
        in hopes that the urgency of the digipet getting sad, will give a boost
        in motivation for people who struggle to get their tasks done.
      </p>

      <p className="slideBody shadow-bardBlack mb-6 rounded-xl bg-[#FFCAD4] p-6 shadow-sm">
        I got 100% for this presentation, too :)
      </p>

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
          src="https://www.canva.com/design/DAFmsU7LAAY/EdWZWd-9UDv-P71XZPqqmg/view?embed"
          allowFullScreen
          allow="fullscreen"
          title="PetItDone Presentation"
        ></iframe>
      </div>

      <p className="slideBody shadow-bardBlack mb-6 rounded-xl bg-[#FAF2A2] p-6 shadow-sm">
        Click the image below to view the wireframes and user story
      </p>

      <a
        href="https://www.canva.com/design/DAF_meJFe6U/t2E-58NiuIXIAAy7122iGg/view?utm_content=DAF_meJFe6U&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
        target="#"
        rel="noopener"
        className="shadow-bardBlack relative block h-auto w-full rounded-xl shadow-sm"
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
          src="https://www.canva.com/design/DAF_meJFe6U/t2E-58NiuIXIAAy7122iGg/view?embed"
          allowFullScreen
          allow="fullscreen"
          title="PetItDone Wireframes"
        ></iframe>
      </a>
    </div>
  );
};

export default PetItDone;
