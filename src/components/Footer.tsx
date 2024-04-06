'use client'
import React, { useState } from "react";
import { FiGithub, FiAtSign, FiClipboard } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
 const [showNotification, setShowNotification] = useState(false);
 const email = "ellenuttley@gmail.com";

 const copyToClipboard = () => {
   navigator.clipboard.writeText(email);
   setShowNotification(true);
   setTimeout(() => setShowNotification(false), 2000); 
 };

  return (
    <footer className=" group fixed bottom-1 left-1 right-1 z-10 flex w-full translate-y-[90%] transform flex-row justify-evenly rounded-md border-2 border-solid bg-tWhite pb-2 pt-2 font-lexend text-tBlack opacity-10 shadow-md shadow-tPrimary transition-transform duration-300 hover:opacity-100 hover:translate-y-0 dark:border-tPrimary dark:bg-tPrimary dark:shadow-tSecondary">
      <a
        href="https://github.com/ellenuttley/aboutme"
        target="_blank"
        rel="noopener noreferrer"
        className="sidebar-icon"
      >
        <FiGithub size="22" className="md:mr-2" />
        <span className="hidden md:inline">View the code for this site</span>
      </a>
      <a
        href="https://www.linkedin.com/in/ellenuttley"
        target="_blank"
        rel="noopener noreferrer"
        className="sidebar-icon"
      >
        <FaLinkedinIn size="22" className="md:mr-2" />
        <span className="hidden md:inline">Visit my LinkedIn</span>
      </a>
      <div className="sidebar-icon" onClick={copyToClipboard}>
        <FiClipboard size="22" className="mr-2" />
        <a className="">{email}</a>
        {showNotification && (
          <div className="absolute translate-x-10 rounded bg-tPrimary px-2 py-1 text-xs text-tWhite shadow-md">
            Email copied to clipboard!
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
