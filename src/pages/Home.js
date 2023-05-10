import React from "react";
import Hero from "../components/Hero";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import About from "../pages/About";

const Home = () => {
  const data = {
    name: "ankit web developer",
    image: "./image/about.png",
    information:
      "Nowadays i am searching a chance to become a Fullstack Developer and i can build a MERN Web App for you .i have knowledge about HTML , CSS , JAVASCRIPT and REACT JS library for frontend . i use NODE JS and express js library for backend . and i use mongoDB for database . if you want to Know more about me so please click on the Check me button",
  };

  return (
    <>
      <Hero {...data} />
      <Projects />
      <About />
      <Contact />
    </>
  );
};

export default Home;
