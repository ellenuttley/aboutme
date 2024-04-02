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
   setTimeout(() => setShowNotification(false), 2000); // Hide notification after 2 seconds
 };

  return (
    <footer className="group text-tBlack font-lexend fixed bottom-1 left-1 right-1 z-10 flex w-full flex-row justify-evenly rounded-md border-2 border-solid bg-tWhite pb-2 pt-2 opacity-10 shadow-md shadow-tPrimary hover:opacity-100 dark:border-tPrimary dark:bg-tPrimary dark:shadow-tSecondary">
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2"
      >
        <FiGithub size="22" className="sidebar-icon" />
        <span>View the code for this site</span>
      </a>
      <a
        href="https://www.linkedin.com/in/ellenuttley"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2"
      >
        <FaLinkedinIn size="22" className="sidebar-icon" />
        <span>Visit my LinkedIn</span>
      </a>
      <div className="flex cursor-pointer items-center space-x-2">
        <FiClipboard
          size="22"
          onClick={copyToClipboard}
          className="sidebar-icon"
        />
                <a>{email}</a>
        {showNotification && (
          <div className="absolute translate-x-10 px-2 py-1 bg-tPrimary text-tWhite text-xs rounded shadow-md">
            Email copied to clipboard!
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
