/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require(`path`)

module.exports = {
  /* Your site config here */
  siteMetadata:{
    title: 'Adriam Familia',
    author: 'Adriam Familia',
    description:'A description about Adriam Familia, his skills and what he likes.'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Noto Sans JP`,
        ],
        display: 'swap'
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-sass',
  ],
  pathPrefix: '/myfirst-gatsby-app'
}
