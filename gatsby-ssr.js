/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

const React = require("react");
const { HelmetProvider } = require("react-helmet-async");

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
exports.onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: `cs` })
}

exports.wrapRootElement = ({ element }) => (
  <HelmetProvider>{element}</HelmetProvider>
);
