import React, { useState, useMemo } from 'react'
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
  Button
} from '@chakra-ui/react'
import Layout from '../components/Layout'
import BlogCard from '../components/BlogCard'
import SEOGatsby from '../components/SEOGatsby'

export default function BlogPage({ data }) {
  const [selectedTags, setSelectedTags] = useState([])
  const { allMdx, allFile } = data

  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const textColor = useColorModeValue('gray.600', 'gray.400')
  const headingColor = useColorModeValue('green.600', 'green.400')

  // Get all images data safely
  const allImages = allFile?.nodes || []

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
      return []
    }
    
    return allMdx.nodes.map(post => ({
      ...post,
      slug: generateSlug(post.internal, post.id),
      frontmatter: {
        ...post.frontmatter,
        slug: generateSlug(post.internal, post.id)
      }
    }))
  }, [allMdx?.nodes])

  // Debug logging - moved after posts is defined
  console.log('Blog page - allImages:', allImages)
  console.log('Blog page - posts:', posts)
  posts.forEach(post => {
    console.log(`Post ${post.slug}:`, {
      image: post.frontmatter.featuredImage,
      imageRelativePath: post.fields?.imageRelativePath,
      hasOptimizedImage: allImages.some(img => img?.relativePath === post.fields?.imageRelativePath)
    })
  })

  // Get all unique tags from posts
  const allTags = useMemo(() => {
    const tags = posts.flatMap(post => post.frontmatter.tags || [])
    return [...new Set(tags)]
  }, [posts])

  // Filter posts by selected tags
  const filteredPosts = useMemo(() => {
    if (selectedTags.length === 0) {
      return posts
    }
    return posts.filter(post => 
      post.frontmatter.tags?.some(tag => selectedTags.includes(tag))
    )
  }, [posts, selectedTags])

  const handleTagClick = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    )
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

            {/* Tag Filter */}
            {allTags.length > 0 && (
              <Box>
                <Text fontSize="md" fontWeight="medium" mb={3} color={textColor}>
                  Filtrovat podle témat:
                </Text>
                <HStack spacing={2} flexWrap="wrap">
                  {allTags.map((tag) => (
                    <Button
                      key={tag}
                      size="sm"
                      variant={selectedTags.includes(tag) ? "solid" : "outline"}
                      colorScheme="green"
                      onClick={() => handleTagClick(tag)}
                    >
                      {tag}
                    </Button>
                  ))}
                </HStack>
              </Box>
            )}

            {/* Blog Posts Grid */}
            {filteredPosts.length > 0 ? (
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                {filteredPosts.map((post) => (
                  <BlogCard key={post.id} post={post} allImages={allImages} />
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
    allFile(filter: {sourceInstanceName: {eq: "images"}}) {
      nodes {
        relativePath
        childImageSharp {
          gatsbyImageData(width: 400, height: 200, placeholder: BLURRED, formats: [AUTO, WEBP])
        }
      }
    }
  }
`