"use client";
import { useState } from "react";
import { FiHome, FiUserCheck, FiCode, FiPenTool, FiSun } from "react-icons/fi";

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
          <FiHome size="33" />
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
          <FiUserCheck size="33" />
          <span
            className={`sidebar-tooltip ${activeTooltip === "read-my-cv" ? "scale-100" : "scale-0"}`}
          >
            About Me
          </span>
        </a>
        <a
          href="#my-code"
          className="sidebar-icon"
          onMouseEnter={() => handleMouseEnter("my-code")}
          onMouseLeave={handleMouseLeave}
        >
          <FiCode size="33" />
          <span
            className={`sidebar-tooltip ${activeTooltip === "my-code" ? "scale-100" : "scale-0"}`}
          >
            My Code
          </span>
        </a>

        <a
          href="#my-design"
          className="sidebar-icon"
          onMouseEnter={() => handleMouseEnter("my-design")}
          onMouseLeave={handleMouseLeave}
        >
          <FiPenTool size="33" />
          <span
            className={`sidebar-tooltip ${activeTooltip === "my-design" ? "scale-100" : "scale-0"}`}
          >
            My Design
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
