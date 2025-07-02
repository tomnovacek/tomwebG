import React, { useState, useMemo } from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Tag,
  TagLabel,
  TagLeftIcon,
  HStack,
  VStack,
  Center,
  Button
} from '@chakra-ui/react'
import { FiTag } from 'react-icons/fi'
import Seo from '../components/SEO'
import BlogCard from '../components/BlogCard'
import { processBlogPost } from '../utils/blogUtils'

// Main Blog component
const Blog = ({ data }) => {
  const [selectedTags, setSelectedTags] = useState([])

  // Process the blog posts data
  const posts = useMemo(() => {
    if (!data?.allMdx?.nodes) {
      return []
    }
    
    const processedPosts = data.allMdx.nodes.map(node => {
      const processed = processBlogPost(node)
      return processed
    }).filter(post => post !== null)
    
    return processedPosts
  }, [data?.allMdx?.nodes])

  // Get all unique tags from posts
  const tags = useMemo(() => {
    const tagSet = new Set()
    posts.forEach((post) => {
      if (post.tags) {
        post.tags.forEach((tag) => tagSet.add(tag))
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
      post.tags && post.tags.some(tag => selectedTags.includes(tag))
    )
  }, [posts, selectedTags])

  if (!posts || posts.length === 0) {
    return (
      <Center minH="60vh">
        <VStack spacing={4}>
          <Text>Žádné články nebyly nalezeny.</Text>
          <Text fontSize="sm" color="gray.500">Posts array length: {posts.length}</Text>
          <Text fontSize="sm" color="gray.500">MDX nodes: {data?.allMdx?.nodes?.length || 0}</Text>
          <Button onClick={() => window.location.reload()}>
            Zkusit znovu
          </Button>
        </VStack>
      </Center>
    )
  }

  return (
    <Box bg="gray.50" minH="100vh" py={12}>
      <Seo
        title="Blog - Tom Nováček"
        description="Články o psychologii, osobním rozvoji a duševním zdraví"
        keywords="blog, psychologie, osobní rozvoj, duševní zdraví"
        url="https://tomnovacek.com/blog"
      />
      <Container maxW="container.xl">
        <VStack spacing={12} align="stretch">
          <Box textAlign={'center'}>
            <Heading as="h1" variant="section">
              Blog
            </Heading>
            <Text fontSize="xl" color="gray.600">
              Články o psychologii, osobním rozvoji a duševním zdraví
            </Text>
          </Box>

          {tags.length > 0 && (
            <Box>
              <Heading as="h2" size="md" mb={4}>
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

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {filteredPosts.map(post => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}

export default Blog 