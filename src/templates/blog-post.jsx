import React from 'react'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { Box, Container, Heading, Text, Badge, Flex, Avatar, useColorModeValue } from '@chakra-ui/react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import ExerciseFrame from '../components/ExerciseFrame'
import InfoFrame from '../components/InfoFrame'
import TableOfContents from '../components/TableOfContents'
import { StaticImage } from 'gatsby-plugin-image'

// Helper function to generate slug from text
const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

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
  const headingGreen = useColorModeValue('green.600', 'green.300')

  // MDX components - now using the color values from hooks
  const mdxComponents = {
    h1: (props) => {
      const id = slugify(props.children)
      return (
        <Heading as="h1" size="sm" mb={6} mt={8} color={headingGreen} id={id} {...props} />
      )
    },
    h2: (props) => {
      const id = slugify(props.children)
      return (
        <Heading as="h2" size="xs" mb={4} mt={6} color={headingGreen} id={id} {...props} />
      )
    },
    h3: (props) => {
      const id = slugify(props.children)
      return (
        <Heading as="h3" size="xs" mb={3} mt={5} color={headingGreen} id={id} {...props} />
      )
    },
    h4: (props) => {
      const id = slugify(props.children)
      return (
        <Heading as="h4" size="xs" mb={2} mt={4} color={headingGreen} id={id} {...props} />
      )
    },
    p: (props) => (
      <Box as="p" mb={4} color={bodyTextColor} lineHeight="1.7" fontSize="sm" {...props} />
    ),
    ul: (props) => (
      <Box as="ul" mb={4} pl={6} color={listTextColor} {...props} />
    ),
    ol: (props) => (
      <Box as="ol" mb={4} pl={6} color={listTextColor} {...props} />
    ),
    li: (props) => (
      <Box as="li" mb={2} lineHeight="1.6" color={listTextColor} {...props} />
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
            "image": frontmatter.image ? {
              "@type": "ImageObject",
              "width": 1200,
              "height": 630,
              "alt": frontmatter.title
            } : undefined,
            "author": {
              "@type": "Person",
              "name": frontmatter.author?.name || "Tomáš Nováček",
              "jobTitle": "Psycholog a terapeut"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Tomáš Nováček - Psychoterapie"
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
          {/* Featured Image */}
          {frontmatter.image && (
            <Box mb={4} borderRadius="lg" overflow="hidden" maxH="200px">
              {(() => {
                switch (frontmatter.image) {
                  case 'stress.webp':
                    return (
                      <StaticImage
                        src="../assets/img/blog/stress.webp"
                        alt={frontmatter.title}
                        placeholder="blurred"
                        layout="constrained"
                        width={800}
                        height={200}
                        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                        loading="eager"
                      />
                    )
                  case 'under-blanket.jpg':
                    return (
                      <StaticImage
                        src="../assets/img/blog/under-blanket.jpg"
                        alt={frontmatter.title}
                        placeholder="blurred"
                        layout="constrained"
                        width={800}
                        height={200}
                        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                        loading="eager"
                      />
                    )
                  case 'self-hug.jpg':
                    return (
                      <StaticImage
                        src="../assets/img/blog/self-hug.jpg"
                        alt={frontmatter.title}
                        placeholder="blurred"
                        layout="constrained"
                        width={800}
                        height={200}
                        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                        loading="eager"
                      />
                    )
                  case 'emotion-faces.jpg':
                    return (
                      <StaticImage
                        src="../assets/img/blog/emotion-faces.jpg"
                        alt={frontmatter.title}
                        placeholder="blurred"
                        layout="constrained"
                        width={800}
                        height={200}
                        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                        loading="eager"
                      />
                    )
                  default:
                    // Always render something for unknown images
                    return (
                      <Box bg="gray.100" height="200px" display="flex" alignItems="center" justifyContent="center">
                        <Text color="gray.400">Obrázek nenalezen</Text>
                      </Box>
                    )
                }
              })()}
            </Box>
          )}
          {/* Header */}
          <Box mb={6}>
            <Heading as="h1" size="md" mb={2} mt={2} color={headingGreen}>
              {frontmatter.title}
            </Heading>
            
            <Flex align="center" mb={4} flexWrap="wrap" gap={4}>
              {frontmatter.author && (
                <Flex align="center" gap={2}>
                  <Avatar 
                    size="sm" 
                    name={frontmatter.author.name} 
                    src={frontmatter.author.image ? `/img/${frontmatter.author.image}` : undefined} 
                  />
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
          
          {/* Main Content with TOC */}
          <Flex align="start" gap={10}>
            <Box flex="1" minW={0} className="prose">
              <MDXProvider components={mdxComponents}>
                {children}
              </MDXProvider>
            </Box>
            <Box display={{ base: 'none', md: 'block' }} minW="220px" maxW="260px">
              <TableOfContents />
            </Box>
          </Flex>
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