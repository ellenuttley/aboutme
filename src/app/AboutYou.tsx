"use client";

import React, { useState } from "react";
import QuoteBox from "@/components/QuoteBox";
import TitleBox from "@/components/TitleBox";
import ColorPalette from "@/components/ColourPalette";
import { FiGithub } from "react-icons/fi";
import ReviewBox from "@/components/ReviewBox";

const AboutYou = () => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const handleMouseEnter = (tooltipId: string) => {
    setActiveTooltip(tooltipId);
  };

  const handleMouseLeave = () => {
    setActiveTooltip(null);
  };

  return (
    <div className="grid grid-cols-3 place-items-center gap-2 gap-y-5">
      <div className="col-span-3">
        <h1 className="embossed pt-2 text-center text-tTransition">
          You want someone who can...
        </h1>
      </div>

      <QuoteBox quote="Create a tool for designing color palettes" />
      <div className="box relative col-span-3 inline-grid grid-cols-3">
        <div className="col-span-1 place-content-center">
          <ColorPalette />
        </div>
        <div className="box col-span-2 h-full  place-content-center content-center space-y-2 border-none shadow-none">
          <a
            href="https://github.com/ellenuttley/aboutme/blob/main/src/components/ColourPalette.tsx"
            className="sidebar-icon absolute right-1 top-1 flex-shrink self-auto"
            onMouseEnter={() => handleMouseEnter("github")}
            onMouseLeave={handleMouseLeave}
          >
            <FiGithub size="33" />
            <span
              className={`sidebar-tooltip text-sx origin-left -translate-x-full translate-y-10 ${activeTooltip === "github" ? "scale-100" : "scale-0"}`}
            >
              View on GitHub
            </span>
          </a>
          <p className="opacity-30 hover:opacity-100">
            When I read this, I actually squeeled with glee.
          </p>
          <p>
            The patterns between complementary colours is something that has
            itched at my brain for a long time.
          </p>
          <p>
            This is a palette generator I made that converts the
            &#39;primary&#39; colour into individual &#39;red&#39;,
            &#39;green&#39;, and &#39;blue&#39; variables.
          </p>
          <p>
            The palette is then generated, with algorithms that are designed to
            keep the original balance between the red, green, and blue tones.
          </p>
        </div>

        {/* <div className="col-span-1">
            View the colour palette on GitHub
        </div> */}
      </div>

      {/* <PaletteCodeAccordion /> */}
      <QuoteBox quote="Collaborate on expanding the Tailwind CSS documentation" />
      <div className="box relative col-span-3 space-y-1">
        {/* <p>
          I was a writer for years - here is an article I wrote for an occultist
          magazine about living in a mining town
        </p> */}
        <p>
          During the CFG App Development Masters, I got 100% on the
          documentation I wrote for our project above:{" "}
          <a
            href="https://github.com/n1ght0wl/cfg_masters/blob/main/Design%20Documentation%20-%20PetItDone.pdf"
            className="hover:text-[#C4AEEB], underline underline-offset-2 max-md:font-irene md:hover:font-irene"
          >
            PetItDone
          </a>
        </p>
      </div>

      {/* <QuoteBox quote="Enhance our documentation with visual demos" />
      <div className="box relative col-span-3">
        Speaking of CFG, I also got 100% for both of the presentations I did
      </div> */}

      <QuoteBox quote="Teach and inspire our audience" />
      <div className="box relative col-span-3 space-y-2 md:col-span-2">
        <p>
          In a previous lifetime, when I worked in call center management, I
          devised a training program that led to a 15% uptick in floor sales.
        </p>
        <p>
          The only other training that came close to this in my time there cost
          50k, and the uptick was initially 9%, but then it slid back to normal
          very quickly. But mine <em>stuck</em>!
        </p>
        <p>
          I am an entertainer at heart, and this leaks into the way I conduct my
          training sessions. I know that if my trainees aren&#39;t engaged, they
          aren&#39;t listening - and if they aren&#39;t listening, they
          can&#39;t learn.
        </p>
      </div>

      <div className="col-span-3 flex w-full justify-center md:col-span-1 ">
        <ReviewBox
          count={5}
          review="Yours is the only training that doesn’t make me want to jump out of the window"
          name="Actual quote from a former teammate"
        />
      </div>

      {/* <p className="box relative col-span-3 -translate-y-2">
        An article I wrote about being forced to teach my daughter to read
        during lockdown
      </p> */}
      <QuoteBox quote="Redesign and build the Headless UI documentation site" />
      <div className="box col-span-3 space-y-2">
        <p>
          Re-designing and re-making websites has been my bread and butter for
          years, and I love doing it.
        </p>
        <p>
          I always try and find the light touches that can make the heaviest
          impace simplest tweaks to make the biggest impact.
        </p>
        <p>
          My years in writing spaces have equipt me to build what my client
          wants, and I pride myself in being able to run with my clients vision.
        </p>
      </div>
      {/* <div className="col-span-4">
 
      </div> */}

      {/* <QuoteBox quote="Create new components and templates" />
      <TitleBox title="Create new components and templates" />

      <div className="col-span-2"></div>
      <div className="col-span-3"><MyComponents /></div> */}
    </div>
  );
};

export default AboutYou;
