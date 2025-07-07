import React from 'react'
import { graphql, Link as GatsbyLink } from 'gatsby'
import { Box, Container, Heading, Text, VStack, SimpleGrid, useColorModeValue } from '@chakra-ui/react'
import Layout from '../components/Layout'
import SEOGatsby from '../components/SEOGatsby'
import BlogCard from '../components/BlogCard'

export default function TagTemplate({ data, pageContext }) {
  const { tag } = pageContext
  const { allMdx } = data

  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const textColor = useColorModeValue('gray.600', 'gray.400')
  const headingColor = useColorModeValue('green.600', 'green.400')

  // Function to generate slug from file path
  const generateSlug = (internal, id) => {
    if (internal?.contentFilePath) {
      const pathParts = internal.contentFilePath.split('/')
      const fileName = pathParts[pathParts.length - 1]
      return fileName.replace('.mdx', '')
    }
    // Fallback to using the post ID if contentFilePath is null
    return id ? id.split('-').pop() : 'post'
  }

  // Process blog posts
  const posts = allMdx.nodes.map(post => ({
    ...post,
    slug: generateSlug(post.internal, post.id),
    frontmatter: {
      ...post.frontmatter,
      slug: generateSlug(post.internal, post.id)
    }
  }))

  return (
    <Layout>
      <SEOGatsby 
        title={`${tag} | Blog - Tomáš Nováček`}
        description={`Články o tématu ${tag} na blogu Tomáše Nováčka`}
        pathname={`/tags/${tag}`}
      />
      <Box bg={bgColor} minH="100vh" py={8}>
        <Container maxW="6xl">
          <VStack spacing={8} align="stretch">
            <VStack spacing={4} textAlign="center">
              <Heading as="h1" size="2xl" color={headingColor}>
                Tag: {tag}
              </Heading>
              <Text fontSize="lg" color={textColor}>
                {posts.length} článků s tímto tématem
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>
    </Layout>
  )
}

export const pageQuery = graphql`
  query TagQuery($tag: String!) {
    allMdx(
      filter: { 
        frontmatter: { 
          tags: { in: [$tag] },
          status: { eq: "published" }
        } 
      }
      sort: { frontmatter: { date: DESC } }
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
          status
        }
        internal {
          contentFilePath
        }
      }
    }
  }
` 