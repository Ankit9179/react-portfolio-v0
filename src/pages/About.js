import React from "react";
import Hero from "../components/Hero";

const About = () => {
  const data = {
    name: "Ankit",
    image: "./image/hero.gif",
    information:
      "i have done my B.SC (math) from MCBU university and i am learning programming  ",
  };

  return <Hero {...data} />;
};

export default About;
