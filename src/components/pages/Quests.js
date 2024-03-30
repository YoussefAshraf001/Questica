import React, { useEffect, useState } from "react";
import "../../App.css";
import "./Quests.css";
import CardItem from "./CardItem";
import Search from "../Search";

export default function Quests() {
  return (
    <>
      <div className="cards">
        <h1>Check out these EPIC Quests!</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <Search />
              <CardItem />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
