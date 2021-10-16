import React from "react";
import { TextField, Box, ThemeProvider, createMuiTheme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "../HeaderComponents/Header.css";

const Header = ({setWord,word,lightMode}) => {
  const darkTheme = createMuiTheme({
    palette: {
      primary: {
        main: lightMode? "#000":"#fff",
      },
      mode:lightMode? "light":"dark",
    },
  });

  return (
    <div className="headerComponent">
      <h1 className="title">{word ? word : "Dictionary"}</h1>
      <div className="inputSection">
        <ThemeProvider theme={darkTheme}>
          {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              label="Search"
              style={{ fontSize: "14px" }}
              variant="standard"
              className="searchForAWord"
              value={word}
              onChange={(e)=>setWord(e.target.value)}
            />
          </Box>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
