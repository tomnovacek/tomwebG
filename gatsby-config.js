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
    image: `/img/tom1.png`,
    twitterUsername: `@tomnovacek`,
    language: `cs`,
    locale: `cs_CZ`,
  },
  // Disable source maps in production
  flags: {
    DEV_SSR: false,
  },
  plugins: [
    // Core image processing plugins (load first)
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
    
    // Source plugins (load before transformers)
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blogPosts`,
      },
    },
    
    // MDX plugin (load after source plugins)
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        mdxOptions: {
          rehypePlugins: [
            require('rehype-slug'),
            require('rehype-autolink-headings'),
          ],
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              quality: 85,
              withWebp: true,
              linkImagesToOriginal: false,
              showCaptions: true,
              markdownCaptions: true,
            },
          },
        ],
      },
    },
    
    // PWA and SEO plugins (load last)
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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GATSBY_GA_MEASUREMENT_ID || `G-XLRSRL1Y7K`,
        head: false,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 0,
        enableWebVitalsTracking: true,
        defer: true,
        sampleRate: 100,
        siteSpeedSampleRate: 10,
        cookieDomain: "tomnovacek.com",
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
        createLinkInHead: true,
        entryLimit: 50000,
        excludes: ['/tags/*'],
      },
    },
  ],
}