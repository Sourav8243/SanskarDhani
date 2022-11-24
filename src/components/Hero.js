import React from "react";
import { Button } from "reactstrap";
import "../App.css";
const Hero = () => (
  <div>
    <main className="cover-page" id="hero">
      <section className="wrapped-page">
        <div className="item-center">
          <h1>SANSKARDHANI</h1>
          <h3>The Cultural Capital of Madhya Pradesh</h3>
          <Button outline color="warning" href="#about">
            Explore More
          </Button>
        </div>
      </section>
    </main>
  </div>
);

export default Hero;
