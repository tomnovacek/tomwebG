import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Box, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import InfoFrame from './InfoFrame'
import ExerciseFrame from './ExerciseFrame'

const MDXLayout = ({ children }) => {
  const textColor = useColorModeValue('gray.700', 'gray.300')
  const headingColor = useColorModeValue('gray.800', 'white')
  const headingColor2 = useColorModeValue('gray.700', 'gray.200')
  const headingColor3 = useColorModeValue('gray.600', 'gray.300')
  const listColor = useColorModeValue('gray.700', 'gray.300')
  const blockquoteBg = useColorModeValue('green.50', 'green.900')
  const blockquoteBorder = useColorModeValue('green.400', 'green.300')
  const codeBg = useColorModeValue('gray.100', 'gray.700')
  const preBg = useColorModeValue('gray.100', 'gray.800')

  // Custom components for MDX - properly capitalized React components
  const H1 = (props) => (
    <Heading as="h1" size="2xl" mb={6} mt={8} color={headingColor} {...props} />
  )
  
  const H2 = (props) => (
    <Heading as="h2" size="xl" mb={4} mt={6} color={headingColor2} {...props} />
  )
  
  const H3 = (props) => (
    <Heading as="h3" size="lg" mb={3} mt={5} color={headingColor3} {...props} />
  )
  
  const H4 = (props) => (
    <Heading as="h4" size="md" mb={2} mt={4} color={headingColor3} {...props} />
  )
  
  const P = (props) => (
    <Text mb={4} lineHeight="1.7" color={textColor} {...props} />
  )
  
  const Ul = (props) => (
    <Box as="ul" mb={4} pl={6} color={listColor} {...props} />
  )
  
  const Ol = (props) => (
    <Box as="ol" mb={4} pl={6} color={listColor} {...props} />
  )
  
  const Li = (props) => (
    <Box as="li" mb={2} lineHeight="1.6" {...props} />
  )
  
  const Blockquote = (props) => (
    <Box
      as="blockquote"
      borderLeft="4px solid"
      borderColor={blockquoteBorder}
      pl={4}
      py={2}
      my={4}
      bg={blockquoteBg}
      borderRadius="md"
      {...props}
    />
  )
  
  const Code = (props) => (
    <Box
      as="code"
      bg={codeBg}
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
      bg={preBg}
      p={4}
      borderRadius="md"
      overflowX="auto"
      mb={4}
      fontSize="sm"
      fontFamily="mono"
      {...props}
    />
  )

  const mdxComponents = {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    p: P,
    ul: Ul,
    ol: Ol,
    li: Li,
    blockquote: Blockquote,
    code: Code,
    pre: Pre,
    InfoFrame,
    ExerciseFrame,
  }

  return (
    <MDXProvider components={mdxComponents}>
      <Box maxW="4xl" mx="auto" px={4} py={8}>
        {children}
      </Box>
    </MDXProvider>
  )
}

export default MDXLayout 