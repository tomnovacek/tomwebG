import React from 'react'
import { graphql } from 'gatsby'
import { Box, Container, Heading, Text, VStack, SimpleGrid, useColorModeValue } from '@chakra-ui/react'
import Layout from '../components/Layout'
import Seo from '../components/SEO'
import BlogCard from '../components/BlogCard'

export default function BlogPage({ data }) {
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
      <Seo
        title="Blog - Tom Nováček"
        description="Články o duševním zdraví, psychoterapii a osobním rozvoji"
      />
      
      <Box bg={bgColor} minH="100vh" py={8}>
        <Container maxW="6xl">
          <VStack spacing={8} align="stretch">
            <Box textAlign="center">
              <Heading as="h1" size="2xl" color={headingColor} mb={4}>
                Blog
              </Heading>
              <Text fontSize="lg" color={textColor}>
                Články o duševním zdraví, psychoterapii a osobním rozvoji
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
                <Text fontSize="lg" color={textColor}>
                  Zatím zde nejsou žádné články.
                </Text>
              </Box>
            )}
          </VStack>
        </Container>
      </Box>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPageQuery {
    allMdx(
      filter: { frontmatter: { status: { eq: "published" } } }
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
          status
        }
        internal {
          contentFilePath
        }
      }
    }
  }
` 