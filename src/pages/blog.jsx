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
  Tag,
  TagLabel,
  TagLeftIcon,
  HStack,
  Center,
  Button
} from '@chakra-ui/react'
import { FiTag } from 'react-icons/fi'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import BlogCard from '../components/BlogCard'

export default function BlogPage({ data }) {
  const [selectedTags, setSelectedTags] = useState([])
  const { allMdx, allFile } = data

  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const textColor = useColorModeValue('gray.600', 'gray.400')
  const headingColor = useColorModeValue('green.600', 'green.400')

  // Get all images data safely
  const allImages = allFile?.nodes || []

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
  const posts = useMemo(() => {
    if (!allMdx?.nodes) {
      return []
    }
    
    return allMdx.nodes.map(post => ({
      ...post,
      slug: generateSlug(post.internal),
      frontmatter: {
        ...post.frontmatter,
        slug: generateSlug(post.internal)
      }
    }))
  }, [allMdx?.nodes])

  // Get all unique tags from posts
  const tags = useMemo(() => {
    const tagSet = new Set()
    posts.forEach((post) => {
      if (post.frontmatter.tags) {
        post.frontmatter.tags.forEach((tag) => tagSet.add(tag))
      }
    })
    return Array.from(tagSet).sort()
  }, [posts])

  // Filter posts by selected tags
  const filteredPosts = useMemo(() => {
    if (selectedTags.length === 0) {
      return posts
    }
    return posts.filter(post => 
      post.frontmatter.tags && post.frontmatter.tags.some(tag => selectedTags.includes(tag))
    )
  }, [posts, selectedTags])

  if (!posts || posts.length === 0) {
    return (
      <Layout>
        <SEO
          title="Blog - Tom Nováček"
          description="Články o duševním zdraví, psychoterapii a osobním rozvoji"
        />
        <Center minH="60vh">
          <VStack spacing={4}>
            <Text>Žádné články nebyly nalezeny.</Text>
            <Button onClick={() => window.location.reload()}>
              Zkusit znovu
            </Button>
          </VStack>
        </Center>
      </Layout>
    )
  }

  return (
    <Layout>
      <SEO
        title="Blog - Tom Nováček"
        description="Články o duševním zdraví, psychoterapii a osobním rozvoji"
        keywords="blog, psychologie, osobní rozvoj, duševní zdraví"
        url="https://tomnovacek.com/blog"
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

            {tags.length > 0 && (
              <Box>
                <Heading as="h2" size="md" mb={4} color={headingColor}>
                  Filtrovat podle témat
                </Heading>
                <HStack spacing={2} wrap="wrap">
                  {tags.map(tag => (
                    <Tag
                      key={tag}
                      size="md"
                      colorScheme={selectedTags.includes(tag) ? 'green' : 'gray'}
                      cursor="pointer"
                      onClick={() => {
                        setSelectedTags(prev =>
                          prev.includes(tag)
                            ? prev.filter(t => t !== tag)
                            : [...prev, tag]
                        )
                      }}
                    >
                      <TagLeftIcon as={FiTag} />
                      <TagLabel>{tag}</TagLabel>
                    </Tag>
                  ))}
                </HStack>
              </Box>
            )}
            
            {filteredPosts.length > 0 ? (
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                {filteredPosts.map((post) => (
                  <BlogCard key={post.id} post={post} allImages={allImages} />
                ))}
              </SimpleGrid>
            ) : (
              <Box textAlign="center" py={12}>
                <Text fontSize="lg" color={textColor}>
                  Žádné články neodpovídají vybraným filtrům.
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
        fields {
          imageRelativePath
        }
      }
    }
    allFile(filter: {sourceInstanceName: {eq: "images"}}) {
      nodes {
        relativePath
        childImageSharp {
          gatsbyImageData(width: 400, height: 200, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  }
` 