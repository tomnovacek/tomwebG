import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout'
import CustomMDXProvider from '../components/MDXProvider'
import SEOGatsby from '../components/SEOGatsby'
import {
  Container,
  Box,
  Heading,
  Text,
  VStack,
  Tag,
  TagLabel,
  HStack,
  Flex,
  List,
  ListItem,
  Link,
  useColorModeValue,
} from '@chakra-ui/react'

const BlogPost = ({ data, children, pageContext }) => {
  const { mdx } = data
  const { frontmatter } = mdx
  const [activeHeading, setActiveHeading] = useState('')
  const [headings, setHeadings] = useState([])
  const [isClient, setIsClient] = useState(false)
  
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const tocBgColor = useColorModeValue('gray.50', 'gray.900')

  // Set client flag
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Generate TOC from children content (client-side only)
  useEffect(() => {
    if (!isClient) return

    // Wait for content to be rendered
    const timer = setTimeout(() => {
      // Select only headings within the main content area, excluding footer
      const mainContent = document.querySelector('[data-content="main"]')
      if (!mainContent) return
      
      const headingElements = mainContent.querySelectorAll('h2, h3')
      const headingData = []
      
      headingElements.forEach((element) => {
        const level = parseInt(element.tagName.charAt(1))
        const text = element.textContent.trim()
        const id = element.id || text.toLowerCase()
          .replace(/[^a-z0-9\s-]/g, '')
          .replace(/\s+/g, '-')
          .replace(/-+/g, '-')
          .replace(/^-|-$/g, '')
        
        // Ensure element has an ID for scrolling
        if (!element.id) {
          element.id = id
        }
        
        headingData.push({
          id,
          text,
          level
        })
      })
      
      setHeadings(headingData)
    }, 100)

    return () => clearTimeout(timer)
  }, [isClient])

  // Intersection Observer for active heading highlighting
  useEffect(() => {
    if (!isClient || headings.length === 0) return

    // Select only headings within the main content area
    const mainContent = document.querySelector('[data-content="main"]')
    if (!mainContent) return
    
    const headingElements = mainContent.querySelectorAll('h2, h3')
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeading(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -35% 0px' }
    )

    headingElements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [headings, isClient])

  const scrollToHeading = (id) => {
    if (!isClient) return
    
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const image = frontmatter.featuredImage ? getImage(frontmatter.featuredImage) : null

  return (
    <Layout>
      <Container maxW="6xl" py={8}>
        <Flex gap={8} direction={{ base: 'column', lg: 'row' }}>
          {/* Main Content */}
          <Box 
            flex="1" 
            bg={bgColor} 
            borderRadius="xl" 
            p={8} 
            boxShadow="lg" 
            border="1px solid" 
            borderColor={borderColor}
            data-content="main"
          >
            <VStack spacing={6} align="stretch" mb={8}>
              <Heading as="h1" size="2xl" textAlign="center">
                {frontmatter.title}
              </Heading>
              {frontmatter.excerpt && (
                <Text fontSize="xl" color="gray.600" textAlign="center">
                  {frontmatter.excerpt}
                </Text>
              )}
              
              {/* Featured Image */}
              {image && (
                <Box borderRadius="lg" overflow="hidden" boxShadow="md">
                  <GatsbyImage
                    image={image}
                    alt={frontmatter.title}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </Box>
              )}
              
              <HStack spacing={4} justify="center" wrap="wrap">
                {frontmatter.date && (
                  <Text color="gray.500" fontSize="sm">
                    {new Date(frontmatter.date).toLocaleDateString('cs-CZ')}
                  </Text>
                )}
                {frontmatter.readTime && (
                  <Text color="gray.500" fontSize="sm">
                    {frontmatter.readTime} min čtení
                  </Text>
                )}
              </HStack>
              {frontmatter.tags && frontmatter.tags.length > 0 && (
                <HStack spacing={2} justify="center" wrap="wrap">
                  {frontmatter.tags.map(tag => (
                    <Tag key={tag} size="sm" colorScheme="green" variant="outline">
                      <TagLabel>{tag}</TagLabel>
                    </Tag>
                  ))}
                </HStack>
              )}
            </VStack>
            
            {/* MDX content rendered using children prop */}
            <Box
              sx={{
                'h1': { fontSize: '2xl', fontWeight: 'bold', mb: 4, mt: 8, scrollMarginTop: '100px' },
                'h2': { fontSize: 'xl', fontWeight: 'bold', mb: 3, mt: 6, scrollMarginTop: '100px' },
                'h3': { fontSize: 'lg', fontWeight: 'bold', mb: 2, mt: 4, scrollMarginTop: '100px' },
                'p': { mb: 4, lineHeight: 1.7 },
                'ul': { mb: 4, pl: 6 },
                'ol': { mb: 4, pl: 6 },
                'li': { mb: 1 },
                'blockquote': { 
                  borderLeft: '4px solid', 
                  borderColor: 'green.300', 
                  pl: 4, 
                  py: 2, 
                  mb: 4,
                  fontStyle: 'italic',
                  bg: 'gray.50'
                },
                'code': { 
                  bg: 'gray.100', 
                  px: 2, 
                  py: 1, 
                  borderRadius: 'md',
                  fontSize: 'sm'
                },
                'pre': { 
                  bg: 'gray.800', 
                  color: 'white', 
                  p: 4, 
                  borderRadius: 'md', 
                  mb: 4,
                  overflow: 'auto'
                },
                'a': { 
                  color: 'green.600', 
                  textDecoration: 'underline',
                  '&:hover': { color: 'green.700' }
                },
                'strong': { fontWeight: 'bold' },
                'em': { fontStyle: 'italic' }
              }}
            >
              <CustomMDXProvider>
                {children}
              </CustomMDXProvider>
            </Box>
          </Box>

          {/* Table of Contents */}
          {headings.length > 0 && (
            <Box
              w={{ base: '100%', lg: '300px' }}
              h="fit-content"
              bg={tocBgColor}
              borderRadius="lg"
              p={6}
              border="1px solid"
              borderColor={borderColor}
              position={{ base: 'static', lg: 'sticky' }}
              top="100px"
            >
              <Heading size="md" mb={4}>
                Obsah
              </Heading>
              <List spacing={2}>
                {headings.map((heading) => (
                  <ListItem key={heading.id}>
                    <Link
                      onClick={() => scrollToHeading(heading.id)}
                      color={activeHeading === heading.id ? 'green.600' : 'gray.600'}
                      fontWeight={activeHeading === heading.id ? 'bold' : 'normal'}
                      fontSize="sm"
                      pl={(heading.level - 1) * 4}
                      _hover={{ color: 'green.600' }}
                      cursor="pointer"
                      display="block"
                      py={1}
                    >
                      {heading.text}
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Box>
          )}
        </Flex>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date
        readTime
        excerpt
        tags
        featuredImage {
          childImageSharp {
            gatsbyImageData(
              width: 800
              quality: 85
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
        }
        author {
          name
        }
      }
    }
  }
`

export default BlogPost

export const Head = ({ data, pageContext }) => {
  const { mdx } = data
  const { frontmatter } = mdx
  const { slug } = pageContext
  
  return (
    <SEOGatsby 
      title={`${frontmatter.title} | Tomáš Nováček - Blog`}
      description={frontmatter.excerpt || `Článek o ${frontmatter.title.toLowerCase()}`}
      pathname={`/blog/${slug}`}
      image={frontmatter.featuredImage?.publicURL || "/img/tom1.png"}
      article={true}
    />
  )
} 