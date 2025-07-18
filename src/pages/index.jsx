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
  <>
    <SEOGatsby 
      title="Psychoterapie v centru Brna | Tomáš Nováček"
      description="Jsem psycholog a terapeut Tomáš Nováček a nabízím psychoterapii v centru Brna. Pomáhám lidem překonávat životní výzvy a dosahovat osobního růstu. Objednejte se online."
      pathname="/"
    />
    {/* Structured Data for SEO */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Tomáš Nováček",
          "jobTitle": "Psycholog a terapeut",
          "description": "Certifikovaný psychoterapeut pro dospělé v centru Brna",
          "url": "https://tomnovacek.com",
          "image": "https://tomnovacek.com/img/tom1.png",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Sukova 4",
            "addressLocality": "Brno",
            "addressCountry": "CZ"
          },
          "telephone": "+420 602 773 440",
          "email": "terapie@tomnovacek.com",
          "sameAs": [
            "https://www.psychoterapie-integrace.cz",
            "https://www.czap.cz/"
          ],
          "knowsAbout": [
            "Psychoterapie",
            "Integrativní psychoterapie",
            "Úzkost",
            "Deprese",
            "Vztahové problémy",
            "Duševní zdraví"
          ],
          "worksFor": {
            "@type": "Organization",
            "name": "Soukromá psychoterapeutická praxe"
          }
        })
      }}
    />
    
    {/* Local Business Schema */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Tomáš Nováček - Psychoterapie",
          "description": "Certifikovaný psychoterapeut pro dospělé v centru Brna",
          "url": "https://tomnovacek.com",
          "telephone": "+420 602 773 440",
          "email": "terapie@tomnovacek.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Sukova 4",
            "addressLocality": "Brno",
            "addressCountry": "CZ"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "49.1951",
            "longitude": "16.6068"
          },
          "openingHours": "Mo-Fr 09:00-18:00",
          "priceRange": "$$",
          "serviceType": "Psychoterapie",
          "areaServed": "Brno a okolí"
        })
      }}
    />
  </>
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