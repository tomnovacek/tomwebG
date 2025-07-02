import React, { useState, useEffect, useMemo } from 'react'
import { Link as GatsbyLink } from 'gatsby'
import {
  Box,
  Container,
  Heading,
  Text,
  Tag,
  TagLabel,
  Link,
  VStack,
  HStack,
  Divider,
  useColorModeValue,
  SimpleGrid,
  useStyleConfig,
  Grid,
  GridItem,
} from '@chakra-ui/react'
import { MDXProvider } from '@mdx-js/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { getPostBySlug, getRelatedPosts } from '../utils/blogUtils'
import { Loading } from '../components/Loading'
import Seo from '../components/SEO'
import { compileMDX } from 'next-mdx-remote/rsc'
import OptimizedImage from '../components/OptimizedImage'
import TableOfContents from '../components/TableOfContents'
import ContentFrame from '../components/ContentFrame'

// Function to normalize text for anchor IDs
const normalizeText = (text) => {
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD') // Decompose characters with diacritics
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    .replace(/^\d+\.\s*/, '') // Remove leading numbers and dots
    .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric chars with hyphens
    .replace(/^-+|-+$/g, '') // Remove leading/trailing hyphens
}

export default function BlogPostContent({ slug }) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [post, setPost] = useState(null)
  const [relatedPosts, setRelatedPosts] = useState([])
  const [mdxContent, setMdxContent] = useState(null)

  // Move all useColorModeValue hooks to the top
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const hoverBgColor = useColorModeValue('gray.50', 'gray.700')
  const headingColor = useColorModeValue('green.600', 'gray.200')
  const metaTextColor = useColorModeValue('gray.500', 'gray.400')

  // Get MDX styles from theme
  const styles = useStyleConfig('MDX')

  // Create MDX components inside the component
  const mdxComponents = useMemo(() => ({
    h1: (props) => {
      const id = normalizeText(props.children)
      return (
        <Heading
          as="h1"
          id={id}
          scrollMarginTop="120px"
          {...styles.h1}
          {...props}
        />
      )
    },
    h2: (props) => {
      const id = normalizeText(props.children)
      return (
        <Heading
          as="h2"
          id={id}
          scrollMarginTop="120px"
          {...styles.h2}
          {...props}
        />
      )
    },
    h3: (props) => {
      const id = normalizeText(props.children)
      return (
        <Heading
          as="h3"
          id={id}
          scrollMarginTop="120px"
          {...styles.h3}
          {...props}
        />
      )
    },
    p: (props) => <Text {...styles.p} {...props} />,
    a: (props) => {
      // Check if the link is internal (starts with /blog/)
      if (props.href?.startsWith('/blog/')) {
        // If it's a link to a specific section, ensure the hash is normalized
        const [path, hash] = props.href.split('#')
        if (hash) {
          const normalizedHash = normalizeText(hash)
          return <Link as={GatsbyLink} to={`${path}#${normalizedHash}`} {...styles.a} {...props} />
        }
        return <Link as={GatsbyLink} to={props.href} {...styles.a} {...props} />
      }
      // External links
      return <Link {...styles.a} isExternal {...props} />
    },
    ul: (props) => (
      <Box as="ul" pl={0} mb={4} listStyleType="disc" listStylePosition="outside">
        {props.children}
      </Box>
    ),
    ol: (props) => (
      <Box as="ol" pl={0} mb={4} listStyleType="decimal" listStylePosition="outside">
        {props.children}
      </Box>
    ),
    li: (props) => (
      <Text as="li" {...styles.li} {...props}>
        {props.children}
      </Text>
    ),
    blockquote: (props) => (
      <Box as="blockquote" {...styles.blockquote} {...props} />
    ),
    img: (props) => (
      <OptimizedImage
        borderRadius="lg"
        my={6}
        maxW="100%"
        h="auto"
        alt={props.alt || ''}
        {...props}
      />
    ),
    ExerciseFrame: (props) => <ContentFrame type="exercise" {...props} />,
    InfoFrame: (props) => <ContentFrame type="info" {...props} />,
  }), [styles.h1, styles.h2, styles.h3, styles.p, styles.a, styles.li, styles.blockquote])

  useEffect(() => {
    const loadPost = async () => {
      try {
        setLoading(true)
        const postData = await getPostBySlug(slug)
        if (!postData) {
          throw new Error('Post not found')
        }
        setPost(postData)
        
        // Compile MDX content
        const { content } = await compileMDX({
          source: postData.content,
          components: mdxComponents,
        })
        setMdxContent(content)
        
        const related = await getRelatedPosts(postData)
        setRelatedPosts(related)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadPost()
  }, [slug, mdxComponents])

  // Separate effect for handling scroll after content is rendered
  useEffect(() => {
    if (!loading && mdxContent) {
      const hash = window.location.hash
      if (hash) {
        const id = normalizeText(hash.substring(1))
        const element = document.getElementById(id)
        if (element) {
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - 120 // 120px offset for header
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      }
    }
  }, [loading, mdxContent])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return (
      <Container maxW="container.xl" py={8}>
        <Box textAlign="center">
          <Heading mb={4}>Error</Heading>
          <Text>{error}</Text>
          <Link as={GatsbyLink} to="/blog" color="green.500" mt={4} display="inline-block">
            Return to Blog
          </Link>
        </Box>
      </Container>
    )
  }

  if (!post) {
    return (
      <Container maxW="container.xl" py={8}>
        <Box textAlign="center">
          <Heading mb={4}>Post Not Found</Heading>
          <Text>The requested blog post could not be found.</Text>
          <Link as={GatsbyLink} to="/blog" color="green.500" mt={4} display="inline-block">
            Return to Blog
          </Link>
        </Box>
      </Container>
    )
  }

  return (
    <Container maxW="container.xl" py={8}>
      <Seo
        title={`${post.title} - Blog`}
        description={post.excerpt}
        keywords={post.tags.join(', ')}
        url={`https://tomnovacek.com/blog/${slug}`}
        image={post.image}
      />
      <Link
        as={GatsbyLink}
        to="/blog"
        display="inline-flex"
        alignItems="center"
        mb={8}
        color="green.500"
        _hover={{ textDecoration: 'none', color: 'green.600' }}
      >
        <ChevronLeftIcon />
        <Text ml={1}>Back to Blog</Text>
      </Link>

      <Box
        bg={bgColor}
        borderRadius="lg"
        boxShadow="lg"
        overflow="hidden"
        border="1px solid"
        borderColor={borderColor}
      >
        {post.image && (
          <OptimizedImage
            src={post.image}
            alt={post.title}
            w="100%"
            h="500px"
            objectFit="cover"
          />
        )}

        <Box p={{ base: 6, md: 12 }}>
          <VStack spacing={8} align="stretch">
            <Box>
              <Heading as="h1" size="2xl" mb={6} lineHeight="1.2" color={headingColor}>
                {post.title}
              </Heading>
              <HStack spacing={6} color={metaTextColor}>
                <HStack>
                  <Text>{post.date}</Text>
                </HStack>
                <HStack>
                  <Text>{post.readTime}</Text>
                </HStack>
              </HStack>
            </Box>

            <Divider />

            <Grid templateColumns={{ base: '1fr', lg: '1fr 300px' }} gap={8}>
              <GridItem>
                <Box className="prose prose-lg max-w-none">
                  <MDXProvider components={mdxComponents}>
                    {mdxContent}
                  </MDXProvider>
                </Box>
              </GridItem>
              <GridItem display={{ base: 'none', lg: 'block' }}>
                <TableOfContents />
              </GridItem>
            </Grid>

            {post.tags && post.tags.length > 0 && (
              <Box>
                <Heading as="h3" size="md" mb={4} color={headingColor}>
                  Tags
                </Heading>
                <HStack spacing={2} wrap="wrap">
                  {post.tags.map((tag) => (
                    <Tag
                      key={tag}
                      size="md"
                      borderRadius="full"
                      variant="subtle"
                      colorScheme="green"
                    >
                      <TagLabel>{tag}</TagLabel>
                    </Tag>
                  ))}
                </HStack>
              </Box>
            )}

            {relatedPosts.length > 0 && (
              <Box>
                <Heading as="h3" size="md" mb={6} color={headingColor}>
                  Related Posts
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.slug}
                      as={GatsbyLink}
                      to={`/blog/${relatedPost.slug}`}
                      p={6}
                      borderRadius="lg"
                      border="1px solid"
                      borderColor={borderColor}
                      _hover={{
                        textDecoration: 'none',
                        bg: hoverBgColor,
                        transform: 'translateY(-2px)',
                        boxShadow: 'md',
                      }}
                      transition="all 0.2s"
                    >
                      <VStack align="stretch" spacing={3}>
                        <Heading as="h4" size="md" noOfLines={2} color={headingColor}>
                          {relatedPost.title}
                        </Heading>
                        <Text color={metaTextColor} fontSize="sm">
                          {relatedPost.date} · {relatedPost.readTime}
                        </Text>
                      </VStack>
                    </Link>
                  ))}
                </SimpleGrid>
              </Box>
            )}
          </VStack>
        </Box>
      </Box>
    </Container>
  )
}