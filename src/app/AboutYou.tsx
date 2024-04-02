import React from "react";
import QuoteBox from "@/components/QuoteBox";
import ColorPalette from "@/components/ColourPalette";

const AboutYou = () => {
  return (
    
    
    <div className="grid grid-cols-3 gap-2 gap-y-5">
      <div className="col-span-3">
        <h1 className="embossed text-center text-2xl leading-tight text-tTransition">
          You want someone who can...
        </h1>
        </div>

        <QuoteBox quote="Create a tool for designing color palettes" />
        <div className="col-span-1">
          <ColorPalette />
        </div>
        <div className="box col-span-2 space-y-2">
          <p>When I read this, I actually squeeled with glee.</p>
          <p>
            The patterns between colours in a generator is something that has
            itched my brain for a while now. This was my attempt at writing
            algorithms that took the rgb code of a users chosen colour, and then
            uses those individial red, green, and blue integers to attempt to
            create complementary colours.
          </p>
        </div>
        <QuoteBox quote="Collaborate on expanding the Tailwind CSS documentation" />
        <QuoteBox quote="Teach and inspire our audience" />
        <QuoteBox quote="Redesign and build the Headless UI documentation site" />
        <div className="box col-span-3 space-y-2">
          <p>
            Re-designing and re-making websites has been my bread and butter for
            years, and I love doing it.
          </p>
          <p>
            I always try and find the simplest tweaks to make the biggest
            impact, and I find that so often you can avoid huge overhauls if you
            do the light touches well
          </p>
        </div>
        <QuoteBox quote="Create a tool for designing color palettes" />

        <div className="col-span-2"></div>
        <div className="col-span-2"></div>
      </div>
    
  );
};

export default AboutYou;
