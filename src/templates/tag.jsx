import React from 'react'
import { graphql, Link } from 'gatsby'
import { Box, Container, Heading, Text, VStack, SimpleGrid, useColorModeValue } from '@chakra-ui/react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import BlogCard from '../components/BlogCard'

export default function TagTemplate({ data, pageContext }) {
  const { tag } = pageContext
  const { allMdx } = data

  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const textColor = useColorModeValue('gray.600', 'gray.400')
  const headingColor = useColorModeValue('green.600', 'green.400')

  // Function to generate slug from file path
  const generateSlug = (internal) => {
    if (internal?.contentFilePath) {
      const pathParts = internal.contentFilePath.split('/')
      const fileName = pathParts[pathParts.length - 1]
      return fileName.replace('.mdx', '')
    }
    return ''
  }

  // Process blog posts
  const posts = allMdx.nodes.map(post => ({
    ...post,
    slug: generateSlug(post.internal),
    frontmatter: {
      ...post.frontmatter,
      slug: generateSlug(post.internal)
    }
  }))

  return (
    <Layout>
      <SEO
        title={`Články s tagem "${tag}"`}
        description={`Všechny články s tagem "${tag}"`}
      />
      
      <Box bg={bgColor} minH="100vh" py={8}>
        <Container maxW="6xl">
          <VStack spacing={8} align="stretch">
            <Box textAlign="center">
              <Heading as="h1" size="2xl" color={headingColor} mb={4}>
                Články s tagem "{tag}"
              </Heading>
              <Text fontSize="lg" color={textColor}>
                Našli jsme {posts.length} článků s tímto tagem
              </Text>
            </Box>
            
            {posts.length > 0 ? (
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                {posts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </SimpleGrid>
            ) : (
              <Box textAlign="center" py={12}>
                <Text fontSize="lg" color={textColor} mb={4}>
                  Žádné články s tímto tagem nebyly nalezeny.
                </Text>
                <Link to="/blog">
                  <Text color={headingColor} fontWeight="medium">
                    Zobrazit všechny články
                  </Text>
                </Link>
              </Box>
            )}
          </VStack>
        </Container>
      </Box>
    </Layout>
  )
}

export const pageQuery = graphql`
  query PostsByTag($tag: String!) {
    allMdx(
      filter: {
        frontmatter: { 
          tags: { in: [$tag] }
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
          image
          author {
            name
            image
            role
          }
        }
        internal {
          contentFilePath
        }
      }
    }
  }
` 