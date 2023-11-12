import Content from "./Content";
import { ThemeContext } from "./Contexttheme";
import FontContext from "./FontContext";
import Heading from "./Heading";
import Navigation from "./Navigation";
import searchImg from "./assets/icon-search.svg";
import { useContext, useState } from "react";

function App() {
  const [word, setWord] = useState("");
  const [results, setResults] = useState(null);
  const { darkTheme } = useContext(ThemeContext);
  const { selectedFont } = useContext(FontContext);

  const searchWord = async () => {
    const response = await fetch(
      "https://api.dictionaryapi.dev/api/v2/entries/en/" + word
    );

    const data = await response.json();

    setResults(data[0]);
  };

  const heading = () => {
    const audio = results?.phonetics.find((phone) => phone.audio !== "")?.audio;
    return {
      audioUrl: audio,
      word: results?.word,
      phonetic: results?.phonetic,
    };
  };

  return (
    <div
      style={{ fontFamily: selectedFont }}
      className={
        darkTheme
          ? "bg-black  w-screen h-screen mx-auto "
          : "bg-white w-screen h-screen mx-auto px-100 "
      }
    >
      <div
        className={
          darkTheme
            ? "bg-black container  h-screen mx-auto px-10 md:px-60"
            : "bg-white container h-screen mx-auto px-10 md:px-60"
        }
      >
        <Navigation style={{ fontFamily: selectedFont }} />
        <input
          type="text"
          value={word}
          placeholder="Search for a word"
          onChange={(e) => setWord(e.target.value)}
          className={
            darkTheme
              ? "w-full bg-slate-800 border-none outline-none rounded-lg px-3 py-4 shadow-sm text-white"
              : "w-full bg-gray-100 border-none outline-none rounded-lg px-3 py-4 shadow-sm"
          }
        />
        <button className="-mx-14  px-3 py-4 rounded-lg" onClick={searchWord}>
          <img src={searchImg} width={18} />
        </button>

        {results?.meanings?.length > 0 && (
          <>
            <Heading {...heading()} />
            {results.meanings.map((content, index) => {
              return <Content {...content} key={index} />;
            })}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
