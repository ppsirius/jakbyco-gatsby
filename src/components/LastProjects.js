import React from "react";
import { StaticQuery, graphql } from "gatsby"

const LastProjects = () => {
  return (
    <StaticQuery
      query={
        graphql`
          query {
            allProjectsJson {
              edges {
                node {
                  title
                  link
                  description
                }
              }
            }
          }
        `
      }
      render={data => (
        <div className="last-projects">
          <div className="last-project-container">
            <h2 className="headline last-project-headline">Last projects:</h2>
            <ul className="projects-list">
              {data.allProjectsJson.edges.map((item, index) => (
                <li className="project-element" key={index}>
                  <a href={item.node.link} target="_blank" rel="noopener noreferrer" className="project-container">
                    <h3 className="headline project-title">{item.node.title}</h3>
                    <span className="project-description">{item.node.description}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    />
  );
};

export default LastProjects;
