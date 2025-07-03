import React from 'react'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { Box, Container, Heading, Text, Badge, Flex, Avatar, useColorModeValue } from '@chakra-ui/react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import ExerciseFrame from '../components/ExerciseFrame'
import InfoFrame from '../components/InfoFrame'

export default function BlogPost({ data, children }) {
  const { mdx } = data
  const { frontmatter } = mdx

  const bgColor = useColorModeValue('white', 'gray.900')
  const textColor = useColorModeValue('gray.600', 'gray.400')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const headingColor = useColorModeValue('gray.800', 'white')
  const subHeadingColor = useColorModeValue('gray.700', 'gray.200')
  const tertiaryHeadingColor = useColorModeValue('gray.600', 'gray.300')
  const bodyTextColor = useColorModeValue('gray.700', 'gray.300')
  const listTextColor = useColorModeValue('gray.700', 'gray.300')
  const blockquoteBorderColor = useColorModeValue('green.400', 'green.300')
  const blockquoteBgColor = useColorModeValue('green.50', 'green.900')
  const codeBgColor = useColorModeValue('gray.100', 'gray.700')
  const preBgColor = useColorModeValue('gray.100', 'gray.700')

  // MDX components - now using the color values from hooks
  const mdxComponents = {
    h1: (props) => (
      <Heading as="h1" size="2xl" mb={6} mt={8} color={headingColor} {...props} />
    ),
    h2: (props) => (
      <Heading as="h2" size="xl" mb={4} mt={6} color={subHeadingColor} {...props} />
    ),
    h3: (props) => (
      <Heading as="h3" size="lg" mb={3} mt={5} color={tertiaryHeadingColor} {...props} />
    ),
    h4: (props) => (
      <Heading as="h4" size="md" mb={2} mt={4} color={tertiaryHeadingColor} {...props} />
    ),
    p: (props) => (
      <Text mb={4} color={bodyTextColor} lineHeight="1.7" {...props} />
    ),
    ul: (props) => (
      <Box as="ul" mb={4} pl={6} color={listTextColor} {...props} />
    ),
    ol: (props) => (
      <Box as="ol" mb={4} pl={6} color={listTextColor} {...props} />
    ),
    li: (props) => (
      <Text as="li" mb={2} lineHeight="1.6" {...props} />
    ),
    blockquote: (props) => (
      <Box
        as="blockquote"
        borderLeft="4px solid"
        borderColor={blockquoteBorderColor}
        pl={4}
        py={2}
        my={6}
        bg={blockquoteBgColor}
        borderRadius="md"
        {...props}
      />
    ),
    code: (props) => (
      <Box
        as="code"
        bg={codeBgColor}
        px={2}
        py={1}
        borderRadius="md"
        fontSize="sm"
        {...props}
      />
    ),
    pre: (props) => (
      <Box
        as="pre"
        bg={preBgColor}
        p={4}
        borderRadius="md"
        overflowX="auto"
        mb={4}
        {...props}
      />
    ),
    // Optimized img component for MDX content using Gatsby's image optimization
    img: (props) => {
      // For images in static/img directory, we can optimize them
      if (props.src && props.src.startsWith('/img/')) {
        return (
          <Box my={6} textAlign="center">
            <img
              src={props.src}
              alt={props.alt || 'Blog post image'}
              style={{
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '8px',
                display: 'block',
                margin: '0 auto',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              }}
              loading="lazy"
              decoding="async"
              onLoad={(e) => {
                // Prevent layout shift by setting aspect ratio
                e.target.style.aspectRatio = '16/9'
              }}
            />
            {props.alt && (
              <Text fontSize="sm" color={textColor} mt={2} fontStyle="italic">
                {props.alt}
              </Text>
            )}
          </Box>
        )
      }
      
      // For external images or other sources, use standard img tag
      return (
        <Box my={6} textAlign="center">
          <img
            src={props.src}
            alt={props.alt || 'Blog post image'}
            style={{
              maxWidth: '100%',
              height: 'auto',
              borderRadius: '8px',
              display: 'block',
              margin: '0 auto',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
            loading="lazy"
            decoding="async"
            onLoad={(e) => {
              // Prevent layout shift by setting aspect ratio
              e.target.style.aspectRatio = '16/9'
            }}
          />
          {props.alt && (
            <Text fontSize="sm" color={textColor} mt={2} fontStyle="italic">
              {props.alt}
            </Text>
          )}
        </Box>
      )
    },
    // Add the custom components that MDX files are trying to use
    ExerciseFrame: ExerciseFrame,
    InfoFrame: InfoFrame,
  }

  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        description={frontmatter.excerpt}
        image={frontmatter.image}
      >
        {/* Blog post structured data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": frontmatter.title,
            "description": frontmatter.excerpt,
            "image": {
              "@type": "ImageObject",
              "url": frontmatter.image ? `https://tomnovacek.cz${frontmatter.image}` : undefined,
              "width": 1200,
              "height": 630,
              "alt": frontmatter.title
            },
            "author": {
              "@type": "Person",
              "name": frontmatter.author?.name || "Tomáš Nováček",
              "jobTitle": "Psycholog a terapeut"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Tomáš Nováček - Psychoterapie",
              "logo": {
                "@type": "ImageObject",
                "url": "https://tomnovacek.cz/img/tom1.png"
              }
            },
            "datePublished": frontmatter.date,
            "dateModified": frontmatter.date,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://tomnovacek.cz/blog/${frontmatter.slug}`
            }
          })}
        </script>
      </SEO>
      
      <Container maxW="4xl" py={8}>
        <Box bg={bgColor} borderRadius="lg" p={8} shadow="sm" border="1px solid" borderColor={borderColor}>
          {/* Header */}
          <Box mb={8}>
            <Heading as="h1" size="2xl" mb={4} color={headingColor}>
              {frontmatter.title}
            </Heading>
            
            <Flex align="center" mb={4} flexWrap="wrap" gap={4}>
              {frontmatter.author && (
                <Flex align="center" gap={2}>
                  <Avatar size="sm" name={frontmatter.author.name} src={frontmatter.author.image} />
                  <Box>
                    <Text fontWeight="medium" color={subHeadingColor}>
                      {frontmatter.author.name}
                    </Text>
                    {frontmatter.author.role && (
                      <Text fontSize="sm" color={textColor}>
                        {frontmatter.author.role}
                      </Text>
                    )}
                  </Box>
                </Flex>
              )}
              
              <Text fontSize="sm" color={textColor}>
                {new Date(frontmatter.date).toLocaleDateString('cs-CZ', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </Text>
              
              {frontmatter.readTime && (
                <Text fontSize="sm" color={textColor}>
                  {frontmatter.readTime}
                </Text>
              )}
            </Flex>
            
            {frontmatter.tags && frontmatter.tags.length > 0 && (
              <Flex gap={2} flexWrap="wrap">
                {frontmatter.tags.map((tag) => (
                  <Badge key={tag} colorScheme="green" variant="subtle">
                    {tag}
                  </Badge>
                ))}
              </Flex>
            )}
          </Box>
          
          {/* Content */}
          <Box>
            <MDXProvider components={mdxComponents}>
              {children}
            </MDXProvider>
          </Box>
        </Box>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String!) {
    mdx(id: { eq: $id }) {
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
    }
  }
` 