import React from "react"
import ImageContainer from "../components/ImageContainer";
import About from "../components/About";
import LastProjects from "../components/LastProjects";
import OrientationLock from "../components/OrientationLock";
import SEO from "../components/seo"
import "../styles/main.scss";
import "normalize.css/normalize.css";
import useBuildTime from "../utils/buildTime"

const IndexPage = (query) => {
  const time = useBuildTime()

  return (
    <>
      <SEO keywords={[`portfolio`, `frontend`, `developer`, `react`, `gatsby`, `animation`]} />
      <div className="app" aria-date={time}>
        <ImageContainer />
        <About />
        <LastProjects />
        <OrientationLock />
      </div>
    </>
  )
}


export default IndexPage
