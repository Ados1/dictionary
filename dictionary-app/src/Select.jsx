import React, { useState, useContext } from "react";
import arrow from "./assets/icon-arrow-down.svg";
import "./Select.css";
import { ThemeContext } from "./Contexttheme";
import FontContext from "./FontContext";

const Select = ({ selected, setSelected }) => {
  const handleFontChange = (font) => {
    dispatch({ type: "SET_FONT", payload: font });
  };
  const [isActive, setIsActive] = useState(false);
  const { darkTheme } = useContext(ThemeContext);
  const { dispatch } = useContext(FontContext);

  return (
    <div
      className={
        darkTheme ? "bg-black text-white dropdown" : "bg-white dropdown"
      }
    >
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        {selected}
        <img src={arrow} alt="arrow" />
      </div>
      {isActive && (
        <div
          className={
            darkTheme
              ? "bg-black text-white dropdown-content shadow-lg shadow-purple-700"
              : "bg-white dropdown-content"
          }
        >
          <div
            onClick={(e) => {
              handleFontChange("Roboto Mono");
              setSelected("Mono");
              setIsActive(false);
            }}
            className="dropdown-item"
          >
            Mono
          </div>
          <div
            onClick={(e) => {
              handleFontChange("Noto Serif");
              setSelected("Serif");
              setIsActive(false);
            }}
            className="dropdown-item"
          >
            Serif
          </div>
          <div
            onClick={(e) => {
              handleFontChange("Sans Serif");
              setSelected("Sans - Serif");
              setIsActive(false);
            }}
            className="dropdown-item"
          >
            Sans-Serif
          </div>
        </div>
      )}
    </div>
  );
};

export default Select;
