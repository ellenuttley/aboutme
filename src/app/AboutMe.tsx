import React from "react";
import Image from "next/image";
import AutismAccordion from "@/components/AutismAccordion";

const AboutMe = () => {
  return (
    <div className="grid grid-cols-3 gap-2 gap-y-5">
      <div className="col-span-1 place-content-center">
        <figure>
          <Image
            className="box rounded-lg border border-tTransition p-1 shadow-sm shadow-tBlack"
            src="/ellen.png"
            width={500}
            height={500}
            alt="Portrait picture of Ellen"
          />
          <figcaption className="box mt-1 p-1 text-center font-lexend text-sm">
            I have never looked this good in real life
          </figcaption>
        </figure>
      </div>
      <div className="box col-span-2 h-full place-content-center text-left pt-2 ">
        <h1>I am Ellen</h1>
        <div className="flex text-left *:space-y-2 mt-1">
          <ul>
            <li>
              I started coding when I was 13, by designing and creating MySpace
              profiles
            </li>
            <li>But I did not know what HTML was until I was 30</li>
            <li>I was the highest scoring graduate in my CFGDegree* cohort</li>
          </ul>
        </div>
      </div>
      <AutismAccordion />
    </div>
  );
};

export default AboutMe;
