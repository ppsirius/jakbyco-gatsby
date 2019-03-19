import React from "react"

import SEO from "../components/seo"

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column'
}

const embedStyle = {
  width: '100%'
}

const NotFoundPage = () => (
  <div style={containerStyle}>
    <SEO title="404: Not found" />
    <h1>404: Page Not Found</h1>
    <p><iframe src="https://giphy.com/embed/umMYB9u0rpJyE" style={embedStyle} width="480" height="452" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/shocked-ernie-bert-umMYB9u0rpJyE"></a></p></p>
  </div>
)

export default NotFoundPage
