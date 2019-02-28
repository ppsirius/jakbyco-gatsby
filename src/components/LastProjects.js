import React from "react";
import Content from "./content.json";

const LastProjects = () => {
  return (
    <div className="last-projects">
      <div className="last-project-container">
        <h2 className="headline last-project-headline">Last projects:</h2>
        <ul className="projects-list">
          {Content.projects.map((item, index) => (
            <li className="project-element" key={index}>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="project-container">
                <h3 className="headline project-title">{item.title}</h3>
                <span className="project-description">{item.description}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LastProjects;
