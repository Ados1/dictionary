import React, { useContext } from "react";
import "./switch.css";
import { ThemeContext } from "./Contexttheme";

function Switch() {
  const { darkTheme, themeHandler } = useContext(ThemeContext);
  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={darkTheme} onChange={themeHandler} />
      <span className="switch" />
    </label>
  );
}
export default Switch;
