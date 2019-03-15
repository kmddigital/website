module.exports = {
  siteMetadata: {
    title: `KMD Digital`,
    description: `KMD Digital develops better to deliver meaningful products.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/img`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `KMD Digital`,
        short_name: `KMD Digital`,
        start_url: `/`,
        background_color: `#42ACFE`,
        theme_color: `#42ACFE`,
        display: `minimal-ui`,
        icon: `src/img/kmdlogo.png`, // This path is relative to the root of the site.
        include_favicon: true,
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Raleway`,
          },
        ],
      },
    }
  ],
}
