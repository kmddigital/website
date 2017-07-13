module.exports = {
  siteMetadata: {
    title: `Hello Gatsby`,
    siteUrl: `https://www.example.com`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
      // Setting a color is optional.
        color: `white`
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`
    }
  ]
};
