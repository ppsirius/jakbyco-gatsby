import { useStaticQuery, graphql } from 'gatsby'

function useBuildTime() {
  const data = useStaticQuery(graphql`
    query Info {
      site {
        buildTime(
          formatString: "DD/MM/YYYY HH:mm"
        )
      }
    }
  `)

  return data.site.buildTime
}

export default useBuildTime