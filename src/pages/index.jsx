import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'
import Home from './homepage'

const IndexPage = ({ data }) => {
  return (
    <>
      <SEO 
        title="Psychoterapie v centru Brna | Tomáš Nováček"
        description="Psycholog a terapeut Tomáš Nováček nabízí psychoterapii v centru Brna. Pomáhám lidem překonávat životní výzvy a dosahovat osobního růstu."
      />
      <Home data={data} />
    </>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageQuery {
    allMdx(
      filter: { frontmatter: { status: { eq: "published" } } }
      sort: { frontmatter: { date: DESC } }
      limit: 6
    ) {
      nodes {
        id
        frontmatter {
          title
          date
          readTime
          excerpt
          tags
          image
          author {
            name
            image
            role
          }
          status
        }
        internal {
          contentFilePath
        }
      }
    }
  }
`