import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Box, Container, Heading, Text, VStack, HStack, Tag, TagLabel, useColorModeValue } from '@chakra-ui/react'
import { format } from 'date-fns'
import { cs } from 'date-fns/locale'
import Layout from './Layout'
import Seo from './SEO'
import OptimizedImage from './OptimizedImage'
import ContentFrame from './ContentFrame'

const BlogPostLayout = ({ children, frontmatter, slug }) => {
  // Move all useColorModeValue calls to the top level
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const textColor = useColorModeValue('gray.600', 'gray.300')
  const headingColor = useColorModeValue('gray.800', 'white')
  const tagBgColor = useColorModeValue('blue.50', 'blue.900')
  const tagColor = useColorModeValue('blue.600', 'blue.200')
  const blockquoteBgColor = useColorModeValue('gray.50', 'gray.700')
  const codeBgColor = useColorModeValue('gray.100', 'gray.700')
  const preBgColor = useColorModeValue('gray.50', 'gray.800')

  // Create proper React components for MDX
  const Blockquote = (props) => (
    <Box
      as="blockquote"
      borderLeft="4px solid"
      borderColor="blue.400"
      bg={blockquoteBgColor}
      p={4}
      my={4}
      borderRadius="md"
      {...props}
    />
  )

  const Code = (props) => (
    <Box
      as="code"
      bg={codeBgColor}
      px={2}
      py={1}
      borderRadius="sm"
      fontSize="sm"
      fontFamily="mono"
      {...props}
    />
  )

  const Pre = (props) => (
    <Box
      as="pre"
      bg={preBgColor}
      p={4}
      borderRadius="md"
      overflowX="auto"
      fontSize="sm"
      fontFamily="mono"
      {...props}
    />
  )

  const H1 = (props) => <Heading as="h1" size="xl" mb={4} color={headingColor} {...props} />
  const H2 = (props) => <Heading as="h2" size="lg" mb={3} mt={6} color={headingColor} {...props} />
  const H3 = (props) => <Heading as="h3" size="md" mb={2} mt={4} color={headingColor} {...props} />
  const P = (props) => <Text mb={4} lineHeight="tall" color={textColor} {...props} />
  const Ul = (props) => <Box as="ul" mb={4} pl={6} color={textColor} {...props} />
  const Ol = (props) => <Box as="ol" mb={4} pl={6} color={textColor} {...props} />
  const Li = (props) => <Box as="li" mb={2} color={textColor} {...props} />
  const Strong = (props) => <Text as="strong" fontWeight="bold" color={headingColor} {...props} />
  const Em = (props) => <Text as="em" fontStyle="italic" {...props} />
  const A = (props) => (
    <Text
      as="a"
      color="blue.500"
      textDecoration="underline"
      _hover={{ color: 'blue.600' }}
      {...props}
    />
  )
  const InfoFrame = (props) => <ContentFrame variant="info" {...props} />
  const ExerciseFrame = (props) => <ContentFrame variant="exercise" {...props} />

  // MDX components
  const mdxComponents = {
    h1: H1,
    h2: H2,
    h3: H3,
    p: P,
    ul: Ul,
    ol: Ol,
    li: Li,
    blockquote: Blockquote,
    code: Code,
    pre: Pre,
    strong: Strong,
    em: Em,
    a: A,
    InfoFrame,
    ExerciseFrame,
  }

  const {
    title,
    date,
    readTime,
    excerpt,
    tags = [],
    image,
    author = {}
  } = frontmatter

  return (
    <Layout>
      <Seo title={title} description={excerpt} />
      <Container maxW="4xl" py={8}>
        <VStack spacing={8} align="stretch">
          {/* Header */}
          <VStack spacing={4} align="stretch">
            <Heading as="h1" size="2xl" color={headingColor}>
              {title}
            </Heading>
            
            <HStack spacing={4} color={textColor} fontSize="sm">
              <Text>{format(new Date(date), 'dd. MMMM yyyy', { locale: cs })}</Text>
              <Text>•</Text>
              <Text>{readTime}</Text>
              {author.name && (
                <>
                  <Text>•</Text>
                  <Text>{author.name}</Text>
                </>
              )}
            </HStack>

            {excerpt && (
              <Text fontSize="lg" color={textColor} lineHeight="tall">
                {excerpt}
              </Text>
            )}

            {tags.length > 0 && (
              <HStack spacing={2} flexWrap="wrap">
                {tags.map((tag) => (
                  <Tag key={tag} size="sm" bg={tagBgColor} color={tagColor}>
                    <TagLabel>{tag}</TagLabel>
                  </Tag>
                ))}
              </HStack>
            )}
          </VStack>

          {/* Featured Image */}
          {image && (
            <Box borderRadius="lg" overflow="hidden">
              <OptimizedImage
                src={image}
                alt={title}
                aspectRatio={16 / 9}
                objectFit="cover"
              />
            </Box>
          )}

          {/* Content */}
          <Box
            bg={bgColor}
            border="1px solid"
            borderColor={borderColor}
            borderRadius="lg"
            p={8}
          >
            <MDXProvider components={mdxComponents}>
              {children}
            </MDXProvider>
          </Box>
        </VStack>
      </Container>
    </Layout>
  )
}

export default BlogPostLayout 