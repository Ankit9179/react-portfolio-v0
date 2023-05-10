import React, { useEffect } from "react";
import "../style/Projects.css";
import axios from "axios";

// const api = "https://portfolio-api-snowy.vercel.app"
let projectsData = [];

const Projects = () => {
  const getProjectData = async () => {
    try {
      const res = await axios.get("https://portfolio-api-snowy.vercel.app");
      // const data = await res.json()
      projectsData = res.data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProjectData();
  }, []);

  return (
    <div className="projects-container">
      <h2 className="project-heading">My Projects</h2>
      <div className="card-container">
        {projectsData.map((element) => {
          const { id, prjname, Image, prjlink } = element;
          return (
            <div className="card" key={id}>
              <div className="image-div">
                <img src={Image} alt="EMS" />
              </div>
              <div className="card-data">
                <h3 className="projext-name">{prjname}</h3>
                <p>
                  This is my MERN STACK project . if you want to use my project
                  so please hit on the Live demo button.{" "}
                </p>
                <button>
                  <a href={prjlink}>Live Demo</a>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
