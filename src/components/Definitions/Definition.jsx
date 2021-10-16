import React from "react";
import "./Definition.css";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";

const Definition = ({ word, meanings, lightMode }) => {
  function playAudio() {
    var audio = new Audio(
      meanings[0].phonetics[0] && meanings[0].phonetics[0].audio
    );
    audio.play();
  }
  return (
    <section id="main-content">
      <div
        className="meanings"
        style={{
          backgroundColor: lightMode ? "#fff" : "#282c43ab",
          transition: "all 0.1s linear",
          color: lightMode ? "black" : "white",
        }}
      >
        <div className="audioElement">
          {meanings[0] && word && (
            <p className="phonetic">
              Phonetic :
              {meanings[0].phonetics[0] && meanings[0].phonetics[0].text}
            </p>
          )}

          {meanings[0] && word && (
            <GraphicEqIcon className="pronunciation" onClick={playAudio} />
          )}
        </div>
        {!word ? (
          <div className="defaultDiv">
            <p className="subTitle">Start by typing a word in search </p>
          </div>
        ) : (
          meanings.map((mean) =>
            mean.meanings.map((item) =>
              item.definitions.map((def) => (
                <div
                  className="definitionLine"
                  style={{
                    backgroundColor: lightMode
                      ? "rgba(119, 109, 109, 0.142)"
                      : "rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <b>Definition : &nbsp;&nbsp;{def.definition}</b>
                  <hr />
                  {def.example && (
                    <span>
                      <b>Example :&nbsp;&nbsp;</b>
                      {def.example}
                    </span>
                  )}{" "}
                  {def.synonyms && (
                    <span>
                      <b>Synonyms :&nbsp;&nbsp;</b>
                      {def.synonyms.map((s) => `${s} , `)}
                    </span>
                  )}
                </div>
              ))
            )
          )
        )}
      </div>
    </section>
  );
};

export default Definition;
