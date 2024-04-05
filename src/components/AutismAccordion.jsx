'use client'

import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { HoverTextAutism } from "@/components/HoverText";

const AutismAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="box col-span-4 md:col-span-3 w-full">
      <h2
        onClick={toggleAccordion}
        className="flex cursor-pointer items-center justify-between"
      >
        <span className="space-x-2">
          I am
          <HoverTextAutism />
        </span>

        <span className="absolute right-1 mr-5 inline-block ease-in-out">
          <FiChevronDown />
        </span>
      </h2>
      {isOpen && (
        <div
          // <footer className="s group fixed bottom-1 left-1 right-1 z-10 flex w-full translate-y-full transform flex-row justify-evenly rounded-md border-2 border-solid bg-tWhite pb-2 pt-2 font-lexend text-tBlack opacity-10 shadow-md shadow-tPrimary transition-transform duration-300 hover:opacity-100 hover:translate-y-0 dark:border-tPrimary dark:bg-tPrimary dark:shadow-tSecondary">

          className={`transform transition-transform duration-500 ease-in-out *:space-y-2  ${isOpen ? "scale-y-100 transform transition-all duration-500 ease-in-out " : "scale-y-0 transform transition-all duration-500 ease-in-out "}`}
        >
          <ul>
            <li className="listbox mt-2">
              I am an extremely fast learner, and fanatically self taught. As
              soon as I am curious about something, I have to know how it works.
            </li>
            <li className="listbox">
              I have a keen eye for predicting user behaviours, and I love to
              use to satisfy and simplify the user story
            </li>
            <li className="listbox">
              I can mentally trace a bug back to its root, and a feature forward
              to its impact. I can also follow a project through to completion,
              and use that to forge the best path to get there
            </li>
            <li className="listbox">
              I can sense whether an element is off centre by even 1px... and I
              am genetically incapable of leaving it that way. I once spent 6
              hours trying to center a box (it was horrible)
            </li>
            <li className="listbox">
              I am a creative problem solver, and this has been an asset in
              every team I have been a part of
            </li>
            <li className="listbox">
              My social issues mean that I am immune to office politics, because
              I do not notice it is happening!
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AutismAccordion;
