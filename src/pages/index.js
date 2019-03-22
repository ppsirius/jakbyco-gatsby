import React from "react"
import ImageContainer from "../components/ImageContainer";
import About from "../components/About";
import LastProjects from "../components/LastProjects";
import OrientationLock from "../components/OrientationLock";
import SEO from "../components/seo"
import "../styles/main.scss";
import "normalize.css/normalize.css";
import useBuildTime from "../utils/buildTime"

const IndexPage = () => (
    <>
      <SEO keywords={[`portfolio`, `frontend`, `developer`, `react`, `gatsby`, `animation`]} />
      <div className="app" data-date={useBuildTime()}>
        <ImageContainer />
        <About />
        <LastProjects />
        <OrientationLock />
      </div>
    </>
)

export default IndexPage
