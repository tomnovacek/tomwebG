import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            image
            twitterUsername
            language
            locale
          }
        }
      }
    `
  )
  return site.siteMetadata
} 