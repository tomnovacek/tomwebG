import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEOGatsby from '../components/SEOGatsby'
import Home from './homepage'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Home data={data} />
    </Layout>
  )
}

export default IndexPage

export const Head = () => (
  <SEOGatsby 
    title="Psychoterapie v centru Brna | Tomáš Nováček"
    description="Psycholog a terapeut Tomáš Nováček nabízí psychoterapii v centru Brna. Pomáhám lidem překonávat životní výzvy a dosahovat osobního růstu."
    pathname="/"
  />
)

export const pageQuery = graphql`
  query IndexPageQuery {
    allMdx(
      filter: { frontmatter: { status: { eq: "published" } } }
      sort: { frontmatter: { date: DESC } }
      limit: 3
    ) {
      nodes {
        id
        frontmatter {
          title
          date
          readTime
          excerpt
          tags
          featuredImage {
            childImageSharp {
              gatsbyImageData(width: 400, height: 200, placeholder: BLURRED, formats: [AUTO, WEBP])
            }
            publicURL
          }
          author {
            name
          }
        }
        internal {
          contentFilePath
        }
      }
    }
  }
`