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
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`, `avif`],
          placeholder: `blurred`,
          quality: 85,
          breakpoints: [400, 768, 1200, 1920],
          backgroundColor: `transparent`,
        },
        failOn: `none`,
        stripMetadata: true,
        defaultQuality: 85,
      },
    },
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
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              quality: 85,
              withWebp: true,
              withAvif: true,
              linkImagesToOriginal: false,
              showCaptions: true,
              markdownCaptions: true,
            },
          },
        ],
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
        icons: [
          {
            src: `src/assets/img/navbar-icon-192x192.webp`,
            sizes: `192x192`,
            type: `image/webp`,
          },
          {
            src: `src/assets/img/navbar-icon-512x512.webp`,
            sizes: `512x512`,
            type: `image/webp`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        createLinkInHead: true,
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              nodes {
                path
              }
            }
          }
        `,
        serialize: ({ site, allSitePage }) => {
          return allSitePage?.nodes?.map(page => ({
            url: `${site?.siteMetadata?.siteUrl || ''}${page.path}`,
            changefreq: 'weekly',
            priority: page.path === '/' ? 1.0 : 0.7,
          })) || []
        }
      },
    },
  ],
}