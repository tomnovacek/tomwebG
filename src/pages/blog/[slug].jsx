import React from 'react'
import { graphql } from 'gatsby'
import {
  Container,
  Box,
  Heading,
  Text,
  HStack,
  VStack,
  Tag,
  TagLabel,
  useColorModeValue,
} from '@chakra-ui/react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/Layout'
import SEOGatsby from '../../components/SEOGatsby'
import { useSiteMetadata } from '../../hooks/use-site-metadata'

const BlogPost = ({ data, children }) => {
  const { mdx, allFile } = data
  const { frontmatter } = mdx
  const siteMetadata = useSiteMetadata()
  
  // Find the featured image
  const imageFile = allFile.nodes.find(
    (file) => file.relativePath === frontmatter.featuredImage
  )
  const image = imageFile ? getImage(imageFile) : null

  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Layout>
      <SEOGatsby
        title={frontmatter.title}
        description={frontmatter.excerpt || siteMetadata.description}
        image={image}
        article
      />
      <Container maxW="4xl" py={8}>
        <Box bg={bgColor} borderRadius="xl" p={8} boxShadow="lg" border="1px solid" borderColor={borderColor}>
          {/* Header */}
          <VStack spacing={6} align="stretch" mb={8}>
            <Heading as="h1" size="2xl" textAlign="center">
              {frontmatter.title}
            </Heading>
            
            {frontmatter.excerpt && (
              <Text fontSize="lg" color="gray.600" textAlign="center">
                {frontmatter.excerpt}
              </Text>
            )}

            <HStack justify="center" spacing={4}>
              {frontmatter.tags && frontmatter.tags.map((tag) => (
                <Tag key={tag} size="md" colorScheme="blue" variant="subtle">
                  <TagLabel>{tag}</TagLabel>
                </Tag>
              ))}
            </HStack>

            {frontmatter.date && (
              <Text fontSize="sm" color="gray.500" textAlign="center">
                {new Date(frontmatter.date).toLocaleDateString('cs-CZ', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </Text>
            )}
          </VStack>

          {/* Featured Image */}
          {image && (
            <Box mb={8}>
              <GatsbyImage
                image={image}
                alt={frontmatter.title}
                style={{ borderRadius: '12px' }}
              />
            </Box>
          )}

          {/* MDX Content */}
          <Box className="mdx-content">
            {children}
          </Box>
        </Box>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      frontmatter {
        title
        date
        excerpt
        tags
        featuredImage
      }
    }
    allFile(filter: { sourceInstanceName: { eq: "images" } }) {
      nodes {
        relativePath
        childImageSharp {
          gatsbyImageData(
            width: 800
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  }
`

export default BlogPost 