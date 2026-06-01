import { useEffect, useState } from "react";
import { RiMoonLine, RiSunLine } from "react-icons/ri";

const ThemeToggleButton = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") === "true";
  });

  const themeToggleHandler = () => {
    setTheme((prev) => !prev);
  };

  useEffect(() => {
    document.body.classList.toggle("dark", theme);
    localStorage.setItem("theme", String(theme));
  }, [theme]);

  return (
    <button
      onClick={themeToggleHandler}
      className="
      
        w-7
        h-7
        overflow-hidden
        border
        border-(--border)
        rounded-full
      "
    >
      <div
        className={`
        
         
          transition-transform
           duration-1000
    ease-linear
          ${theme ? "translate-y-0" : "-translate-y-6.5"}
        `}
      >
        <div className="w-full   h-6.5 flex justify-center bg-(--text) items-center">
          <RiSunLine className="text-(--bg)" />
        </div>

        <div className="w-full h-6.5  flex justify-center  bg-(--text) items-center">
          <RiMoonLine className="text-(--bg)" />
        </div>
      </div>
    </button>
  );
};

export default ThemeToggleButton;
