import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import CardItem from "./pages/CardItem.js";
import "./Search.css";

function Search() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div className="main">
      <div className="search">
        {/* <input placeholder="Search" onChange={inputHandler} /> */}
        <TextField
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
      <CardItem input={inputText} />
    </div>
  );
}

export default Search;
