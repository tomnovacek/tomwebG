import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Home from './home'
import SEO from '../components/SEO'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO 
        title="Psychoterapie v centru Brna | Tomáš Nováček"
        description="Psycholog a terapeut Tomáš Nováček nabízí psychoterapii v centru Brna. Pomáhám lidem překonávat životní výzvy a dosahovat osobního růstu."
        url="https://tomnovacek.com/"
        image="/img/forrest.webp"
      />
      <Home data={data} />
    </Layout>
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