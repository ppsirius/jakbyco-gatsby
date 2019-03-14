module.exports = {
  siteMetadata: {
    title: `Piotr Pupczyk Frontend Developer | Portfolio`,
    description: `Coding nice things makes me happy.`,
    author: `Piotr Pupczyk`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `jakbyco.com`,
        short_name: `jakbyco.com`,
        start_url: `/`,
        background_color: `#334455`,
        theme_color: `#334455`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Poppins`,
            subsets: [`latin`],
            variants: [`400`]
          },
          {
            family: `Playfair Display`,
            variants: [`700`],
            subsets: [`latin`],
          },
        ],
      },
    }
  ],
}
