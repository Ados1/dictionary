import React, { useContext } from "react";
import { ThemeContext } from "./Contexttheme";
import FontContext from "./FontContext";

const Content = ({ partOfSpeech, definitions, synonyms }) => {
  const { darkTheme } = useContext(ThemeContext);
  const { selectedFont } = useContext(FontContext);
  return (
    <div className="my-3">
      <div
        className={
          darkTheme
            ? "text-white flex flex-row items-center text-lg font-bold font-serif w-full"
            : "flex flex-row items-center text-lg font-bold font-serif w-full"
        }
        style={{ fontFamily: selectedFont }}
      >
        <p>{partOfSpeech}</p>
        <hr className=" w-full ml-10 " />
      </div>
      <p
        className={
          darkTheme
            ? "text-white mt-3 font-semibold"
            : "text-gray-800 mt-3 font-semibold"
        }
      >
        Meaning
      </p>
      <ul
        className={
          darkTheme
            ? "list-disc px-10 text-white text-sm space-y-2"
            : "list-disc px-10 text-gray-800 text-sm space-y-2"
        }
      >
        {definitions.map((def, index) => (
          <li key={index}>{def.definition}</li>
        ))}
      </ul>

      {synonyms.length > 0 && (
        <p
          className={
            darkTheme ? "text-white text-sm my-2" : "text-gray-800 text-sm my-2"
          }
        >
          Synonyms{" "}
          {synonyms.map((synonym, index) => (
            <span key={index} className="text-purple-800 mx-1">
              {synonym}
            </span>
          ))}
        </p>
      )}
    </div>
  );
};

export default Content;
