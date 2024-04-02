"use client";
import { useState } from "react";
import { FaHome, FaUser, FaBriefcase } from "react-icons/fa";

const Navbar = () => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const handleMouseEnter = (tooltipId: string) => {
    setActiveTooltip(tooltipId);
  };

  const handleMouseLeave = () => {
    setActiveTooltip(null);
  };

  return (
    <nav>
      {/* <div className="lg:bottom-auto lg:left-7 lg:right-auto lg:top-2/4 lg:mx-auto lg:min-w-fit lg:-translate-y-2/4 lg:transform lg:flex-col lg:gap-5 lg:p-3 lg:pb-5 lg:pt-5"> */}
      <div className="sidebar">
        <a
          href="#home"
          className="sidebar-icon"
          onMouseEnter={() => handleMouseEnter("home")}
          onMouseLeave={handleMouseLeave}
        >
          <FaHome />
          <span
            className={`sidebar-tooltip ${activeTooltip === "home" ? "scale-100" : "scale-0"}`}
          >
            Home
          </span>
        </a>
        <a
          href="#read-my-cv"
          className="sidebar-icon"
          onMouseEnter={() => handleMouseEnter("read-my-cv")}
          onMouseLeave={handleMouseLeave}
        >
          <FaUser />
          <span
            className={`sidebar-tooltip ${activeTooltip === "read-my-cv" ? "scale-100" : "scale-0"}`}
          >
            Read My CV
          </span>
        </a>
        <a
          href="#see-my-work"
          className="sidebar-icon"
          onMouseEnter={() => handleMouseEnter("see-my-work")}
          onMouseLeave={handleMouseLeave}
        >
          <FaBriefcase />
          <span
            className={`sidebar-tooltip ${activeTooltip === "see-my-work" ? "scale-100" : "scale-0"}`}
          >
            See My Work
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
