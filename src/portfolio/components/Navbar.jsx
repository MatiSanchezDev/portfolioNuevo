import { useEffect, useState } from "react";
import { SvgDark, SvgLight } from "./componentIcons/";

export const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }

    return "light";
  });

  useEffect(() => {
    if (darkMode === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [darkMode]);

  const handleChangeTheme = () => {
    setDarkMode((state) => (state === "light" ? "dark" : "light"));
  };
  return (
    <nav className="flex justify-end pb-5">
      <div
        className="flex justify-center items-center p-1 rounded-full hover:bg-cBlack dark:hover:bg-cGreen transition duration-150 ease-in-out cursor-pointer hover:text-cWhite"
        onClick={handleChangeTheme}
      >
        {darkMode === "dark" ? <SvgDark /> : <SvgLight />}
      </div>
    </nav>
  );
};
