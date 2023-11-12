import React from "react";
import { createContext, useState } from "react";

export const ThemeContext = createContext();

const Contexttheme = ({ children }) => {
  const [darkTheme, setdarkTheme] = useState(false);

  const themeHandler = () => {
    setdarkTheme((prev) => !prev);
  };
  return (
    <ThemeContext.Provider value={{ darkTheme, themeHandler }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default Contexttheme;
