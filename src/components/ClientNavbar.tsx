'use client'
import { useEffect, useState } from "react";
import Navbar from "./Navbar";

export default function ClientNavbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const prefersDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(prefersDarkMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />;
}
