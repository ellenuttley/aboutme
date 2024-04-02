'use client'

import React, { useState } from "react";

const PetItDone = () => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const handleMouseEnter = (tooltipId: string) => {
    setActiveTooltip("petitdoneAx");
  };

  const handleMouseLeave = () => {
    setActiveTooltip(null);
  };

  return (
    <div className="slideBody font-irene">
      <div className="shadow-bardBlack inline-flex w-full justify-center rounded-xl bg-[#B0E3EE] p-3 shadow-sm lg:p-6 dark:bg-transparent dark:shadow-none">
        <a
          href="https://github.com/ellenuttley/pet-it-done"
          onMouseEnter={() => handleMouseEnter("petitdoneAx")}
          onMouseLeave={handleMouseLeave}
        >
          <img
            className="h-12 w-auto flex-shrink md:h-32"
            src="/petitdoneAx.png"
            alt="Pet It Done Axolotl"
          />
          {activeTooltip === "petitdoneAx" && (
            <p className="font-irene shadow-bardBlack rounded-xl bg-tPrimary p-2 px-3 text-tWhite shadow-sm">
              Click me to view the GitHub!
            </p>
          )}
        </a>
        <img
          className="h-12 w-auto flex-shrink md:h-32 dark:rounded-full dark:bg-gradient-to-b dark:from-transparent dark:via-tPrimary"
          src="/petitdoneLogo.png"
          alt="Pet It Done Logo"
        />
      </div>

      <p className="slideBody dark:bg-transparent">
        PetItDone is a React Native app that combines a digipet and to-do list.
        Designed by neurodivergent people, with neurodivergent people in mind,
        in hopes that the urgency of the digipet getting sad, will give a boost
        in motivation for people who struggle to get their tasks done.
      </p>

      <p className="slideBody shadow-bardBlack mb-6 rounded-xl bg-[#FFCAD4] p-6 shadow-sm">
        To learn more about PetItDone, feel free to click through the
        presentation below!
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
