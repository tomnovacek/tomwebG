/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Tom Novacek - Psycholog a terapeut`,
    description: `Certifikovaný psychoterepeut pro dospělé v centru Brna`,
    author: `@tomnovacek`,
    siteUrl: `https://tomnovacek.com/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blogPosts`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [],
        mdxOptions: {
          remarkPlugins: [],
          rehypePlugins: [],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tom Novacek - Psycholog a terapeut`,
        short_name: `Tom Novacek`,
        description: `Certifikovaný psychoterepeut pro dospělé v centru Brna`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#38a169`,
        display: `minimal-ui`,
        icon: `src/assets/img/navbar-icon-96x96.webp`,
      },
    },
  ],
}
