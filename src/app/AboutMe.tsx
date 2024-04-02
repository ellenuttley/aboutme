import React from "react";
import Image from "next/image";
import { HoverTextAutism } from "@/components/HoverText";
import ColorPalette from "@/components/ColourPalette";

const AboutMe = () => {
  return (
    <div className="grid grid-cols-2 gap-2 gap-y-5">
      <div className="col-span-1">
        <figure>
          <Image
            className="box rounded-lg border border-tTransition p-1 shadow-sm shadow-tBlack"
            src="/ellen.png"
            width={500}
            height={500}
            alt="Portrait picture of Ellen"
          />
          <figcaption className="box text-center text-sm mt-1 ">
            I have never looked this good in real life
          </figcaption>
        </figure>
      </div>
      <div className="col-span-1 text-left page ">
        <h1>I am Ellen</h1>
        <div className="flex *:space-y-2">
          <ul>
            <li>
              I started my development journey when I was 13, by designing and
              creating MySpace profiles
            </li>
            <li>I love design, and I love development</li>
          </ul>
        </div>
      </div>
      <div className="col-span-2 box inset-2">
        <h2>
          <span className="relative inline-block space-x-2">I am</span>
          <HoverTextAutism />
          <br />
        </h2>
        <div className="flex text-left *:space-y-2">
          <ul>
            <li>I am an extremely fast learner, and fanatically self taught</li>
            <li>
              I have a keen eye for predicting user behaviours, and I love to
              use to satisfy and simplify the user story.
            </li>
            <li>
              I can mentally trace a bug back to its root, and a feature forward
              to its impact
            </li>
            <li>
              I can sense whether an element is off centre by even 1px...and I
              am genetically incapable of leaving it that way
            </li>
            <li>
              I am a creative problem solver, and this has been an asset in
              every team I have been a part of
            </li>
            <li>I can recognize patterns in design blocks, hex codes, data</li>
          </ul>
        </div>
      </div>


      <div className="col-span-1">
        <ColorPalette />
      </div>

      <div className="col-span-2">
        <h1 className="blackHeader">You say you want someone who can...</h1>
        <div className="flex *:space-y-2"></div>
      </div>


      <div className="col-span-2"></div>
      <div className="col-span-2"></div>
    </div>
  );
};

export default AboutMe;
