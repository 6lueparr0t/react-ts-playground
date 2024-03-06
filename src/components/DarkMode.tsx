import { useState, useEffect } from "react";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const isDarkMode = Boolean(localStorage.getItem("darkMode") === 'true');
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
      document.documentElement.classList.toggle("dark");
  }, [darkMode]);

  const toggleDarkMode = () => {
    console.log("isDarkMode : ", !darkMode);
    localStorage.setItem("darkMode", String(!darkMode));
    setDarkMode(!darkMode);
  };

  return (
    <button onClick={toggleDarkMode} className="px-4 py-2 rounded-md bg-gray-800 text-white">
      {darkMode ? "Light" : "Dark"}
    </button>
  );
};

export default DarkMode;
