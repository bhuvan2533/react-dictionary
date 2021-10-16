import React, { useEffect, useState } from "react";
import { Container, Switch } from "@mui/material";
import axios from "axios";
import Header from "./components/HeaderComponents/Header.jsx";
import Definition from "./components/Definitions/Definition";
import { grey } from "@mui/material/colors";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { alpha, styled } from "@mui/system";

const App = () => {
  const [word, setWord] = useState();
  const [meanings, setMeanings] = useState([]);
  const [lightMode, setLightMode] = useState(false);

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(meanings);
  // *Calling the api function with useEffect state
  useEffect(() => {
    dictionaryApi();
  }, [word]);

  const containerStyle = {
    display: "flex",
    height: "31vh",
    flexDirection: "column",
  };
  const infoStyling = {
    cursor: "pointer",
  };
  const navBar = {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    right: "20px",
    top: "10px",
  };

  return (
    <div
      className="appComponent"
      style={{
        backgroundColor: lightMode ? "#fff" : "#282c43",
        color: lightMode ? "black" : "white",
        transition: "all 0.6s linear",
      }}
    >
      <div className="navBar" style={navBar}>
        <div className="theme">
          <Switch
            defaultChecked
            color="default"
            className="switch"
            checked={lightMode}
            onChange={() => setLightMode(!lightMode)}
          />
          {!lightMode ? <span>Dark</span> : <span>Light</span>}
        </div>
        <HelpOutlineIcon style={infoStyling} className="info"></HelpOutlineIcon>
      </div>
      <Container maxWidth="md" style={containerStyle}>
        <Header word={word} setWord={setWord} lightMode={lightMode}/>
      </Container>
      {meanings && <Definition word={word} meanings={meanings} lightMode={lightMode}/>}
    </div>
  );
};

export default App;
