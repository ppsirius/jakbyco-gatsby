import React from "react"

import ImageContainer from "../components/ImageContainer";
import About from "../components/About";
import LastProjects from "../components/LastProjects";
import OrientationLock from "../components/OrientationLock";
import SEO from "../components/seo"

const IndexPage = (query) => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="app">
      <ImageContainer />
      <About />
      <LastProjects />
      <OrientationLock />
    </div>
  </>
)

export default IndexPage


export const query = graphql`
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