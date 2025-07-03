/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it

const React = require("react");
const { HelmetProvider } = require("react-helmet-async");

exports.wrapRootElement = ({ element }) => (
  <HelmetProvider>{element}</HelmetProvider>
);
