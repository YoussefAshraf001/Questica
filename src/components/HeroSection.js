import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import backgroundvid from "../assets/videos/video-2.mp4";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src={backgroundvid} autoPlay loop muted />
      <h1 className="fadeInUp-animation">ADVENTURE AWAITS</h1>
      <p className="fadeInUp-animation">What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
