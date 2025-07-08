import React, { useState, useMemo, useEffect } from 'react'
import { graphql } from 'gatsby'
import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  VStack, 
  SimpleGrid, 
  useColorModeValue,
  HStack,
  Button,
  Flex
} from '@chakra-ui/react'
import { FaTag } from 'react-icons/fa'
import Layout from '../components/Layout'
import BlogCard from '../components/BlogCard'
import SEOGatsby from '../components/SEOGatsby'

export default function BlogPage({ data }) {
  const [selectedTags, setSelectedTags] = useState([])
  const [isClient, setIsClient] = useState(false)
  const { allMdx } = data

  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const textColor = useColorModeValue('gray.600', 'gray.400')
  const headingColor = useColorModeValue('green.600', 'green.400')

  // Function to generate slug from file path
  const generateSlug = (internal, id) => {
    if (internal?.contentFilePath) {
      const pathParts = internal.contentFilePath.split('/')
      const fileName = pathParts[pathParts.length - 1]
      // Remove both .md and .mdx extensions
      return fileName.replace(/\.(md|mdx)$/, '')
    }
    // Fallback to using the post ID if contentFilePath is null
    return id ? id.split('-').pop() : 'post'
  }

  // Process blog posts
  const posts = useMemo(() => {
    if (!allMdx?.nodes) {
      console.log('No MDX nodes found')
      return []
    }
    
    const processedPosts = allMdx.nodes.map(post => ({
      ...post,
      slug: generateSlug(post.internal, post.id),
      frontmatter: {
        ...post.frontmatter,
        slug: generateSlug(post.internal, post.id)
      }
    }))
    
    console.log('Processed posts:', processedPosts.length)
    console.log('Sample post tags:', processedPosts[0]?.frontmatter?.tags)
    
    return processedPosts
  }, [allMdx?.nodes])

  // Get all unique tags from posts
  const allTags = useMemo(() => {
    const tags = posts.flatMap(post => post.frontmatter.tags || [])
    const uniqueTags = [...new Set(tags)]
    console.log('All tags found:', uniqueTags)
    return uniqueTags
  }, [posts])

  // Filter posts by selected tags
  const filteredPosts = useMemo(() => {
    console.log('Filtering posts. Selected tags:', selectedTags)
    if (selectedTags.length === 0) {
      return posts
    }
    const filtered = posts.filter(post => 
      post.frontmatter.tags?.some(tag => selectedTags.includes(tag))
    )
    console.log('Filtered posts count:', filtered.length)
    return filtered
  }, [posts, selectedTags])

  // Debug effect
  useEffect(() => {
    setIsClient(true)
    console.log('Blog page mounted')
    console.log('Initial data:', data)
    console.log('All MDX nodes:', allMdx?.nodes?.length)
  }, [data, allMdx])

  const handleTagClick = (tag) => {
    console.log('Tag clicked:', tag)
    setSelectedTags(prev => {
      const newTags = prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
      console.log('New selected tags:', newTags)
      return newTags
    })
  }

  if (!posts || posts.length === 0) {
    return (
      <Layout>
        <Box minH="60vh" display="flex" alignItems="center" justifyContent="center">
          <VStack spacing={4}>
            <Text>Žádné články nebyly nalezeny.</Text>
            <Button onClick={() => window.location.reload()}>
              Zkusit znovu
            </Button>
          </VStack>
        </Box>
      </Layout>
    )
  }

  return (
    <Layout>
      <SEOGatsby 
        title="Blog | Tomáš Nováček - Psychoterapie"
        description="Články o duševním zdraví, psychoterapii a osobním růstu. Praktické tipy a poznatky z terapeutické praxe."
        pathname="/blog"
      />
      <Box bg={bgColor} minH="100vh" py={8}>
        <Container maxW="6xl">
          <VStack spacing={8} align="stretch">
            {/* Header */}
            <VStack spacing={4} textAlign="center">
              <Heading as="h1" size="2xl" color={headingColor}>
                Blog
              </Heading>
              <Text fontSize="lg" color={textColor} maxW="2xl">
                Články o duševním zdraví, psychoterapii a osobním růstu
              </Text>
            </VStack>

            {/* Debug info - show in both development and production for troubleshooting */}
            <Box p={4} bg="yellow.100" borderRadius="md">
              <Text fontSize="sm" fontWeight="bold">Debug Info:</Text>
              <Text fontSize="xs">Posts: {posts.length}</Text>
              <Text fontSize="xs">Tags: {allTags.join(', ')}</Text>
              <Text fontSize="xs">Selected: {selectedTags.join(', ')}</Text>
              <Text fontSize="xs">Filtered: {filteredPosts.length}</Text>
              <Text fontSize="xs">Is Client: {isClient ? 'Yes' : 'No'}</Text>
            </Box>

            {/* Tag Filter */}
            {allTags.length > 0 && isClient && (
              <Box>
                <Text fontSize="md" fontWeight="medium" mb={3} color={textColor}>
                  Filtrovat podle témat:
                </Text>
                <Flex gap={1} flexWrap="wrap">
                  {allTags.map((tag) => {
                    const isSelected = selectedTags.includes(tag)
                    
                    return (
                      <Box
                        key={tag}
                        px={3}
                        py={1}
                        fontSize="xs"
                        fontWeight="semibold"
                        color="green.700"
                        bg={isSelected ? "green.100" : "gray.50"}
                        border="1px solid"
                        borderColor={isSelected ? "green.300" : "gray.200"}
                        borderRadius="md"
                        cursor="pointer"
                        transition="all 0.2s"
                        _hover={{
                          bg: "green.100",
                          borderColor: "green.300",
                        }}
                        onClick={() => handleTagClick(tag)}
                        display="flex"
                        alignItems="center"
                        gap={1}
                      >
                        <FaTag style={{ fontSize: '0.8em' }} />
                        {tag}
                      </Box>
                    )
                  })}
                </Flex>
              </Box>
            )}

            {/* Blog Posts Grid */}
            {filteredPosts.length > 0 ? (
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                {filteredPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </SimpleGrid>
            ) : (
              <Box textAlign="center" py={12}>
                <Text fontSize="lg" color={textColor}>
                  Žádné články nebyly nalezeny pro vybraná témata.
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
          featuredImage {
            childImageSharp {
              gatsbyImageData(
                width: 400
                height: 200
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
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