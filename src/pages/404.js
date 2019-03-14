import React from "react"

import SEO from "../components/seo"

const styles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column'
}

const NotFoundPage = () => (
  <div style={styles}>
    <SEO title="404: Not found" />
    <h1>404: NOT FOUND</h1>
    <p><iframe src="https://giphy.com/embed/umMYB9u0rpJyE" width="480" height="452" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/shocked-ernie-bert-umMYB9u0rpJyE"></a></p></p>
  </div>
)

export default NotFoundPage
