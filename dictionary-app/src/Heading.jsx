import React, { useContext, useRef } from "react";
import play from "./assets/icon-play.svg";
import { ThemeContext } from "./Contexttheme";
import FontContext from "./FontContext";
export const Heading = ({ audioUrl, word, phonetic }) => {
  const { darkTheme } = useContext(ThemeContext);
  const { selectedFont } = useContext(FontContext);
  const ref = useRef();

  const playAudio = () => {
    ref.current.play();
  };
  return (
    <div
      style={{ fontFamily: selectedFont }}
      className="flex flex-row justify-between my-5"
    >
      <h3
        className={
          darkTheme
            ? "font-bold text-white text-3xl font-serif capitalize"
            : "font-bold text-3xl font-serif capitalize"
        }
      >
        {word}
        <span className="block font-normal text-sm text-purple-800">
          {phonetic}
        </span>
      </h3>
      <button
        onClick={playAudio}
        className="bg-indigo-100 h-12 w-12 rounded-full flex flex-row items-center justify-center"
      >
        <img width={60} src={play} />
      </button>

      <audio className="hidden" ref={ref} src={audioUrl} />
    </div>
  );
};

export default Heading;
